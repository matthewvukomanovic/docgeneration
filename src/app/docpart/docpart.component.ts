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
    //debugger;
    if( this.section != null) {

      if( this.section.name == "Violation" || this.section.name == "Certification (if applicable)") {
        //debugger;
      }
      if( this.section.type == SectionType.Dropdown) {
        if( this.section.key != undefined ) {
          console.log(this.section.key);
          this.data = this.dataService.getData(this.section.key);
          console.log(this.data);
        } else {
          console.log("a drop down does not have a key defined");
        }
        //debugger;
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

  // itemChange($event: any) {
  //   this.section.value == $event.currentTarget.value;
  //    console.log($event.currentTarget.value);

  //   // console.log($event.currentTarget.value);
  //   // console.log($event);
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  //   console.log(changes);
  // }
}
