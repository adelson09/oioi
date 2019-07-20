import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesPage } from './ingles.page';

describe('InglesPage', () => {
  let component: InglesPage;
  let fixture: ComponentFixture<InglesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InglesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
