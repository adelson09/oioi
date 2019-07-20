import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilosofiaPage } from './filosofia.page';

describe('FilosofiaPage', () => {
  let component: FilosofiaPage;
  let fixture: ComponentFixture<FilosofiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilosofiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilosofiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
