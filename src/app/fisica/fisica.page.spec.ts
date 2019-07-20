import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicaPage } from './fisica.page';

describe('FisicaPage', () => {
  let component: FisicaPage;
  let fixture: ComponentFixture<FisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
