import { Injectable } from '@angular/core';
import { certificationType } from './data';
import { itemType } from './data';
import { parts } from './data';
import { setNumber } from './data';
import { stepType } from './data';
import { violationTypeFullDescriptions } from './data';
import { violationTypeHints } from './data';
import { violationTypes } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getData(name: string) : string[] {
    switch (name) {
      case 'stepType':
        return stepType;
      case 'itemType':
        return itemType;
      case 'violationTypes':
        return violationTypes;
      case 'certificationType':
        return certificationType;
      case 'setNumber':
        return setNumber;
      default:
        return undefined;
    }
  }

  getLookup(name: string) : {[key : string] : string }  {
    switch (name) {
      case "violationTypeHints":
        return violationTypeHints;
      case "violationTypeFullDescriptions":
        return violationTypeFullDescriptions;
      default:
        return undefined;
    }
  }

  lookupData(name: string, key: string): string {
    switch (name) {
      case "violationTypeHints":
        return violationTypeHints[key];
      case "violationTypeFullDescriptions":
        return violationTypeFullDescriptions[key];
      default:
        return undefined;
    }
  }
}
