import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocpartComponent, DocpartDeclarations } from './docpart/docpart.component';
import { DocComponent } from './doc/doc.component';
import { CookieService } from "ngx-cookie-service";
import { MaterialModule } from "./material-module";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'Mo',
    monthYearA11yLabel: 'Mo',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    DocpartComponent,
    DocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    NgbModule,
//    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ CookieService,
     {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
     {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    //{provide: MAT_DATE_LOCALE, useValue: 'en-AU'},
 ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DocpartDeclarations[0] ],
})
export class AppModule { }
