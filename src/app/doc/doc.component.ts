// const Excel = require('exceljs/modern.nodejs');
// import Excel from 'exceljs/modern.browser';

//import { Workbook } from 'exceljs';

//import * as Excel from "exceljs/dist/exceljs.min.js";
import * as Excel from "exceljs/dist/exceljs.min.js";
//import * as Excel from "exceljs/browser";
import * as Excel2 from 'exceljs/modern.browser';

import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { SectionType } from '../SectionType';
import { SectionsService } from '../sections.service';
import { CookieService } from 'ngx-cookie-service';
import { Document, Paragraph, Packer, TextRun, Table, WidthType, BorderStyle } from "docx";
import { saveAs } from 'file-saver';

//import * as XLSX from 'xlsx';
//import Excel from 'exceljs/modern.browser';

//declare const ExcelJS: any;

import * as _moment from 'moment';
import { TrackingPosition } from '../trackingPosition';
import { ExecFileOptions } from 'child_process';
import { Coordinate } from '../coordinate';
const moment = _moment;

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.less']
})
export class DocComponent implements OnInit {
  sections : Section[];
  idSectionLookup : any;

  constructor(private sectionsService: SectionsService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getSections();
  }

  getSections(): void
  {
    this.sectionsService.getSections().subscribe(sections =>  {
      this.idSectionLookup = {};
      this.sections = this.loadSavedValuesIntoSections(sections)
    });
  }

  public loadSavedValues() {
    this.loadSavedValuesIntoSections(this.sections);
  }

  loadSavedValuesIntoSections(sections: Section[]) : Section[] {
    if( sections == null) {
      return;
    }
    sections.forEach(section => {
      if (section.id != null) {
        if( !section.clearBetweenSessions) {
          let value = this.cookieService.get(section.id);
          section.value = value;
        }
        this.idSectionLookup[section.id] = section;
      }
      if( section.children != null){
        this.loadSavedValuesIntoSections(section.children);
      }
    });

    // if( this.section.id != null) {
    //   let value = this.cookieService.get(this.section.id);
    //   this.section.value = value;
    // }

    return sections;
  }

  public defaultValues() : void {
    this.sectionsService.getSections().subscribe(sections =>
      {
        this.sections = sections;
      });
  }

  public clearValues() : void {
    this.clearArrayValues(this.sections);
  }

  clearArrayValues(sections: Section[]) : void {
    sections.forEach(element => {
      if (element.value != null) {
        element.value = undefined;
      }
      if (element.children != null) {
        this.clearArrayValues(element.children);
      }
    });
  }
  getInformation() : any {
    let playerNameSection = this.idSectionLookup["Player Name"];
    let playerName;
    let playerNameReplacedSpaces;
    let dateOfOffence;
    let dateOfOffenceSection = this.idSectionLookup["Date of Offence"];

    if(playerNameSection != null) {
      playerName = playerNameSection.value;
      playerNameReplacedSpaces= playerName.replace(new RegExp("[ -:,`']", 'g'), ".");
    }
    if(dateOfOffenceSection != null) {
      dateOfOffence = dateOfOffenceSection.value;
      if( dateOfOffence != null) {
        dateOfOffence = dateOfOffence.format("YYYYMMDD");
      }
    }

    let test = {
      'playerName': playerName,
      'playerNameReplacedSpaces': playerNameReplacedSpaces,
      'dateOfOffence': dateOfOffence,
    };

    return test;
  }

  generateXLSXProcessSection(worksheet: Excel.worksheet, section: Section, position: TrackingPosition) : void {
    let cell : Excel.Cell;
    let cellEndRange : Excel.Cell;
    let columnSpan : number = section.columnSpan || 1;
    let extra  = section.extra;
    let alignmentVertical: string;
    let alignmentHorizontal: string;

    let getExtraValueFromKey = function(key: string, defaultValue?: any): any {
      return (extra != null ? extra[key] : undefined) || defaultValue;
    }
    let rowSpan : number = getExtraValueFromKey("rowSpan", 2);

    //console.log( 'processing ' + section.name);
    switch(section.type) {
      case SectionType.Section:
        cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);
        cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column + 9);
        worksheet.mergeCells(cell.address + ":" + cellEndRange.address);

        cell.alignment = { wrapText: true };
        cell.fill = {
          type: 'pattern',
          pattern:'solid',
          fgColor:{argb:'FF000000'},
          bgColor:{argb:'FFFFFFFF'}
        };
        cell.font = {color : {argb: 'FFFFFFFF'}};
        cell.value = section.name;

        position.updateCurrentPosition(1,0);
        break;
      case SectionType.SubSection:
          worksheet.getRow(position.currentPosition.row).height =  getExtraValueFromKey("height", 11);
          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);

          columnSpan = section.columnSpan || 2;
          if (columnSpan > 1 || rowSpan > 1) {
            cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + rowSpan - 1, position.currentPosition.column + columnSpan - 1);
            worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          }

          alignmentVertical = getExtraValueFromKey("alignmentVertical", 'middle');
          alignmentHorizontal = getExtraValueFromKey("alignmentHorizontal", 'center');

          cell.alignment = { wrapText: true, vertical: alignmentVertical, horizontal: alignmentHorizontal};

          cell.border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
          };

          cell.value = section.name;
          cell.font = {bold: true};
          position.usePosition(rowSpan,columnSpan);
        break;
      // case SectionType.SubSectionHeading:
      //     document.addParagraph(
      //       this.createSubHeading(section.name)
      //     );
      //   break;
      case SectionType.Input:
      case SectionType.DatePicker:
      case SectionType.Dropdown:
          worksheet.getRow(position.currentPosition.row).height = 11;
          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);

          if (columnSpan > 1) {
            cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column + columnSpan - 1);
            worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          }

          cell.alignment = { wrapText: true};
          cell.border = {
            top: {style:'thin'},
            left: {style:'thin'},
//            bottom: {style:'thin'},
            right: {style:'thin'}
          };
          cell.value = section.name;
          cell.fill = {
            type: 'pattern',
            pattern:'solid',
            fgColor:{argb:'FFC0C0C0'},
            bgColor:{argb:'FFC0C0C0'},
          };
          cell.font = {bold: true, size: 6,};

          cell = this.getCellByNumber(worksheet, position.currentPosition.row + 1, position.currentPosition.column);
          if (columnSpan > 1) {
            cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + 1, position.currentPosition.column + columnSpan - 1);
            worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          }

          if( section.type === SectionType.DatePicker) {
            cell.value = section.value.format("DD/MM/YYYY");
          } else {
            cell.value = section.value;
          }
          cell.border = {
            // top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
          };

          position.usePosition(2, columnSpan || 1);
        break;
      case SectionType.MultilineInput:
          columnSpan = section.columnSpan || 7;
          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);

          if (columnSpan > 1 || rowSpan > 1) {
            cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + rowSpan - 1, position.currentPosition.column + columnSpan - 1);
            worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          }

          cell.alignment = { wrapText: true, vertical: 'top', horizontal: 'left', };
          cell.border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
          };
          cell.value = section.value;

          var mliHeight =  getExtraValueFromKey("height");
          if( mliHeight > 0) {
            worksheet.getRow(position.currentPosition.row + rowSpan - 1).height = mliHeight;
          }
          // cell.fill = {
          //   type: 'pattern',
          //   pattern:'solid',
          //   fgColor:{argb:'FFC0C0C0'},
          //   bgColor:{argb:'FFC0C0C0'},
          // };
          position.usePosition(rowSpan,columnSpan);
        break;
      case SectionType.Label:

          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);

          if (columnSpan > 1 || rowSpan > 1) {
            cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + rowSpan - 1, position.currentPosition.column + columnSpan - 1);
            worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          }

          let labelHeight =  getExtraValueFromKey("height", undefined);
          if( labelHeight > 0) {
            worksheet.getRow(position.currentPosition.row + rowSpan - 1).height = labelHeight;
          }

          alignmentVertical = getExtraValueFromKey("alignmentVertical", 'middle');
          alignmentHorizontal = getExtraValueFromKey("alignmentHorizontal", 'center');

          cell.alignment = { wrapText: true, vertical: alignmentVertical, horizontal: alignmentHorizontal};
          cell.border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
          };

          let labelSize = getExtraValueFromKey("fontSize");
          if( labelSize > 0) {
            cell.font = {size : labelSize};
          }

          cell.value = section.name;
          position.usePosition(rowSpan,columnSpan);
        break;
      case SectionType.YesNo:
          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column);
          cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + rowSpan - 1, position.currentPosition.column + columnSpan - 1);
          worksheet.mergeCells(cell.address + ":" + cellEndRange.address);
          let sharedYesNoObjects = {
            alignment: { wrapText: true},
            border: {
              top: {style:'thin'},
              left: {style:'thin'},
              bottom: {style:'thin'},
              right: {style:'thin'}
            },
          };
          cell.alignment = sharedYesNoObjects.alignment;
          cell.border = sharedYesNoObjects.border;
          cell.value = "Yes";

          cell = this.getCellByNumber(worksheet, position.currentPosition.row, position.currentPosition.column + columnSpan);
          cellEndRange = this.getCellByNumber(worksheet, position.currentPosition.row + rowSpan - 1, position.currentPosition.column + columnSpan);
          worksheet.mergeCells(cell.address + ":" + cellEndRange.address);

          cell.alignment = sharedYesNoObjects.alignment;
          cell.border = sharedYesNoObjects.border;
          cell.value = "No";
          position.usePosition(rowSpan,columnSpan + 1);
        break;
    }

    if( section.children != null) {
      this.generateXLSXProcessSections(worksheet, section.children, position);
    }

    switch(section.type) {
      case SectionType.Section:
      case SectionType.SubSection:
      case SectionType.SubSectionHeading:
              position.applyCurrentAndUsed();
        break;
    }
  }

  generateXLSXProcessSections( worksheet: Excel.worksheet, sections: Section[], position: TrackingPosition) : void {
    for (const section of sections) {
      this.generateXLSXProcessSection(worksheet, section, position);
    }
  }

  getCellByNumber(worksheet: Excel.worksheet, row: number, column: number) : Excel.Cell {
    let r = worksheet.getRow(row);
    let cell = r.getCell(column);
    return cell;
  }

  getCellByCoordinate(worksheet: Excel.worksheet, coordinate: Coordinate) : Excel.Cell {
    let r = worksheet.getRow(coordinate.row);
    let cell = r.getCell(coordinate.column);
    return cell;
  }

  generateXLSX() : void {
    let workbook: Excel.Workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Code Violation', {pageSetup:{
      paperSize: 9,
      margins: {
        left: 0.23622, right: 0.23622,
        top: 0.3, bottom: 0.3,
        header: 0.0, footer: 0.0
      },
    }});

    // worksheet.getCellByNumber = (row: number, column: number) : Excel.Cell;
    // {
    //   return;
    // };
    //  => (row,column) {
    //   let r = worksheet.getRow(row);
    //   let cell = r.getCell(column);
    //   return cell;
    // };

    let information = this.getInformation();

    workbook.creator = 'Matthew Vukomanovic';
    workbook.description = "Tennis West Code Violation Report for " + information.playerName;
    workbook.title = "Tennis West Code Violation Report";

    // workbook.lastModifiedBy = 'Her';
    // workbook.created = new Date(1985, 8, 30);
    // workbook.modified = new Date();
    // workbook.lastPrinted = new Date(2016, 9, 27);
    // workbook.views = [{
    //     x: 0, y: 0, width: 10000, height: 20000,
    //     firstSheet: 0, activeTab: 0, visibility: 'visible'
    //   }
    // ];
    // let sheet = workbook.addWorksheet('My Sheet');
    // // create a sheet with red tab colour
    // sheet = workbook.addWorksheet('My Sheet1', {properties:{tabColor:{argb:'FFC0000'}}});

    // // create a sheet where the grid lines are hidden
    // sheet = workbook.addWorksheet('My Sheet2', {properties: {showGridLines: false}});

    // // create a sheet with the first row and column frozen
    // sheet = workbook.addWorksheet('My Sheet3', {views:[{xSplit: 1, ySplit:1}]});
    let position: TrackingPosition = new TrackingPosition();

    let cell = this.getCellByCoordinate(worksheet, position.currentPosition);
    cell.value = 'CODE OF BEHAVIOUR REPORT -';
    cell.font = {bold: true, size: 19.5,};
    position.updateCurrentPosition(1,0);

    this.generateXLSXProcessSections(worksheet, this.sections, position);

    let t = workbook.xlsx.writeBuffer().then(excelBuffer => {
      saveAs(new Blob([excelBuffer],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'})
      , "CodeViolation_" + information.playerNameReplacedSpaces + '_' + information.dateOfOffence + "_" + moment() + ".xlsx");
    });

    // const packer = new Packer();

    // packer.toBlob(document).then(blob => {
    //   console.log(blob);
    //   saveAs(blob, "CodeViolation_"  + information.playerNameReplacedSpaces + '_' + information.dateOfOffence + "_" + moment() + ".docx");
    //   console.log("Document created successfully");
    // });
  }

  createHeading(text) {
    return new Paragraph(text).heading1().thematicBreak();
  }

  createSubHeading(text) {
    return new Paragraph(text).heading2();
  }

  createBullet(text) {
    return new Paragraph(text).bullet();
  }
}
