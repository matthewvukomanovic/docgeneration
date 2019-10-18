import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CODESECTIONS } from './sections/code';
import { Section } from './section';
import { CookieService } from "ngx-cookie-service";



@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private cookieService: CookieService) { }

  getSections(): Observable<Section[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');

    //debugger;

    //this.cookieService.delete('testing');
    //let test = this.cookieService.delete('testing');
    // if( test == undefined || test == "") {
    //   console.log('cookie is not defined');
    //   this.cookieService.set('testing', 'cookie is now defined');
    // }
    // else {
    //   console.log(test);
    // }

    return of(Section.cloneSections(CODESECTIONS));
  }


  localCacheSection(section: Section) {
    
  }

}
