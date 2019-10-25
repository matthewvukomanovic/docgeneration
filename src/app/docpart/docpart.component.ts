import { Component, OnInit, Input, SimpleChanges, } from '@angular/core';
import { Directive, ComponentFactoryResolver, Injector, ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';
import { Section } from '../section';
import { SectionType } from '../sectionType';
import { DataService } from '../data.service';
import {MatSelectModule} from '@angular/material/select';
import { EnumService } from '../enum.service';
import { CookieService } from 'ngx-cookie-service';
import { IFragmentComponent, IFragmentDirective, fragmentDirectiveOnChanges, fragmentDirectiveOnDestroy, createComponentRef } from '../fragment-helpers';

interface IDocpartComponent {
  section: Section;
  data: string[];
}

@Component({
  selector: 'app-docpart',
  templateUrl: './docpart.component.html',
  styleUrls: ['./docpart.component.less']
})
export class DocpartComponent implements IFragmentComponent, IDocpartComponent {
  @Input() section: Section;
  data: string[];
  @ViewChild('fragment', { static: true }) fragment: TemplateRef<void>;
  /* NO HOST IN HERE, PLEASE */
}

@Directive({
  selector: '[app-docpart]',
})
export class DocpartFragment implements IDocpartComponent
// , OnInit
 {
  @Input() section: Section;
  data: string[];
  private componentRef = createComponentRef(DocpartComponent, this, this.componentFactoryResolver, this.injector);
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    viewContainerRef: ViewContainerRef,
    private dataService: DataService,
    public enumService: EnumService,
    private cookieService: CookieService
  ) {
    viewContainerRef.createEmbeddedView(this.componentRef.instance.fragment);
  }
  ngOnChanges(changes: SimpleChanges) {
    fragmentDirectiveOnChanges(this.componentRef, changes);
  }
  ngOnDestroy() {
    fragmentDirectiveOnDestroy(this.componentRef);
  }

  // ngOnInit() {
  //   if( this.section != null) {
  //     if( this.section.type == SectionType.Dropdown) {
  //       if( this.section.key != undefined ) {
  //         this.data = this.dataService.getData(this.section.key);
  //       } else {
  //         console.log("a drop down does not have a key defined");
  //       }
  //     }
  //   }
  // }

  // itemChange($event: any) {
  //   if( this.section != null && this.section.id != null)
  //   {
  //     console.log($event);
  //     if( this.section.value == null) {
  //       this.cookieService.delete(this.section.id);
  //     } else {
  //       this.cookieService.set(this.section.id, this.section.value);
  //     }
  //   }
  // }
}

export const DocpartDeclarations = [
  DocpartComponent,
  DocpartFragment,
];
