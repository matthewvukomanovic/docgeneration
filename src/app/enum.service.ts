import { Injectable } from '@angular/core';
import { SectionType } from '../app/sectionType';

@Injectable({
  providedIn: 'root'
})
export class EnumService {
  SectionType = SectionType;
  constructor() { }
}
