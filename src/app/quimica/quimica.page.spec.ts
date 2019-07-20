import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaPage } from './quimica.page';

describe('QuimicaPage', () => {
  let component: QuimicaPage;
  let fixture: ComponentFixture<QuimicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
