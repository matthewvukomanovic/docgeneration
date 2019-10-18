import { SectionType } from './SectionType';

// Note that if adding items to this list it also needs to be added to the cloneSection function in sections.service.ts

class Dictionary {
  [propName: string]: any;
}

export class Section {
//  constructor(values?: Section){}
  name?: string;
  id?: string;
  type: SectionType;
  children?: Section[] = undefined;
  required?: boolean = false;
  value?: any = undefined;
  key?: string = undefined;
  emptyOption?: string = undefined;
  useEmptyOption?: boolean = false;
  controlOptions?: any = undefined;
  clearBetweenSessions?: boolean = false;
  excludeFromWebSite?: boolean = false;
  columnSpan?: number = undefined;
  extra?: Dictionary = undefined;

  // clone?: () => Section = function() : Section {
  //   let section = new Section();
  //   section.name = this.name;
  //   section.id = this.id;
  //   section.type = this.type;
  //   section.required = this.required;
  //   section.value = this.value;
  //   section.key = this.key;
  //   section.emptyOption = this.emptyOption;
  //   section.useEmptyOption = this.useEmptyOption;
  //   section.controlOptions = this.controlOptions;
  //   section.clearBetweenSessions = this.clearBetweenSessions;
  //   section.excludeFromWebSite = this.excludeFromWebSite;
  //   section.columnSpan = this.columnSpan;

  //   if( this.children != null) {
  //     section.children = Section.cloneSections(this.children);
  //   }
  //   return section;
  // }

  public static clone(original: Section) {
    let section = new Section();
    section.name = original.name;
    section.id = original.id;
    section.type = original.type;
    section.required = original.required;
    section.value = original.value;
    section.key = original.key;
    section.emptyOption = original.emptyOption;
    section.useEmptyOption = original.useEmptyOption;
    section.controlOptions = original.controlOptions;
    section.clearBetweenSessions = original.clearBetweenSessions;
    section.excludeFromWebSite = original.excludeFromWebSite;
    section.columnSpan = original.columnSpan;
    section.extra = original.extra;

    if( original.children != null) {
      section.children = Section.cloneSections(original.children);
    }
    return section;
  }

  public static cloneSections(sections: Section[]) : Section[] {
    let sectionsCopy: Section[] = [];
    sections.forEach(element => {
      sectionsCopy.push(Section.clone(element))
    });
    return sectionsCopy;
  }

  childrenWidth?: number;

  // public calculateChildrenWidth() {
  //   let number = 0;
  //   if (this.children != null) {
  //     for(let i=0;i<this.children.length;i++) {
  //       this.children[i].calculateChildrenWidth()
  //     }
  //   }
  // }
}
