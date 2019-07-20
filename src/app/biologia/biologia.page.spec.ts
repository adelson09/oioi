import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologiaPage } from './biologia.page';

describe('BiologiaPage', () => {
  let component: BiologiaPage;
  let fixture: ComponentFixture<BiologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
