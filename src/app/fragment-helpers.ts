import { Type, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef, ComponentFactory, EventEmitter, SimpleChanges, TemplateRef, EmbeddedViewRef, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export function createComponentRef<Component>(component: Type<Component>, hostDirective: any, resolver: ComponentFactoryResolver, injector: Injector) {
  const componentFactory = resolver.resolveComponentFactory(component);
  const ref = componentFactory.create(injector);
  const outputSubscriptions = forwardOutputs(componentFactory.outputs, ref.instance, hostDirective);
  ref.onDestroy(() => outputSubscriptions.unsubscribe());
  return ref;
}

function forwardOutputs(outputs: ComponentFactory<any>['outputs'], from: any, to: any) {
  const outputSubscriptions = new Subscription(); 
  for (const def of outputs) {
    const oneOutputSubscription = (from[def.propName] as EventEmitter<any>).subscribe(to[def.propName]);
    outputSubscriptions.add(oneOutputSubscription);
  }
  return outputSubscriptions;
}

export function fragmentDirectiveOnChanges(componentRef: ComponentRef<any>, changes: SimpleChanges) {
  const component = componentRef.instance;
  for (const propName of Object.keys(changes)) {
    component[propName] = changes[propName].currentValue;
  }
  if (component.ngOnChanges) {
    component.ngOnChanges(changes);
  }
}

export function fragmentDirectiveOnDestroy(componentRef: ComponentRef<any>) {
  componentRef.destroy();
}

export interface IFragmentComponent extends Partial<OnInit>, Partial<OnChanges>, Partial<OnDestroy> {
  fragment: TemplateRef<void>;
}

export interface IFragmentDirective extends OnChanges, OnDestroy {}
