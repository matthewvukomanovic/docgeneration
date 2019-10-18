import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpartComponent } from './docpart.component';

describe('DocpartComponent', () => {
  let component: DocpartComponent;
  let fixture: ComponentFixture<DocpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
