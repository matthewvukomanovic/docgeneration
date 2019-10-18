import { Injectable } from '@angular/core';
import { SectionType } from '../app/SectionType';

@Injectable({
  providedIn: 'root'
})
export class EnumService {
  SectionType = SectionType;
  constructor() { }
}
