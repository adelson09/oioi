import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesPage } from './artes.page';

describe('ArtesPage', () => {
  let component: ArtesPage;
  let fixture: ComponentFixture<ArtesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
