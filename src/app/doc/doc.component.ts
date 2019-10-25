import { Component, OnInit,  Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { Section } from '../section';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.less']
})
export class DocComponent {
  sections : Section[];
  idSectionLookup : any;
  @ContentChild("wrap", { static: false }) wrap:TemplateRef<ElementRef>
}
