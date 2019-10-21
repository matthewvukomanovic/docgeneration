import { Component, OnInit, Input, SimpleChanges, } from '@angular/core';
import { Section } from '../section';
import { SectionType } from '../sectionType';
import { DataService } from '../data.service';
import {MatSelectModule} from '@angular/material/select';
import { EnumService } from '../enum.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-docpart',
  templateUrl: './docpart.component.html',
  styleUrls: ['./docpart.component.less']
})
export class DocpartComponent implements OnInit {
  @Input() section: Section;
  data: string[];
  public sectionType: SectionType;
  
  constructor(private dataService: DataService, public enumService: EnumService, private cookieService: CookieService) { }

  ngOnInit() {
    if( this.section != null) {
      if( this.section.type == SectionType.Dropdown) {
        if( this.section.key != undefined ) {
          this.data = this.dataService.getData(this.section.key);
        } else {
          console.log("a drop down does not have a key defined");
        }
      }
    }
  }

  itemChange($event: any) {
    if( this.section != null && this.section.id != null)
    {
      console.log($event);
      if( this.section.value == null) {
        this.cookieService.delete(this.section.id);
      } else {
        this.cookieService.set(this.section.id, this.section.value);
      }
    }
  }
}
