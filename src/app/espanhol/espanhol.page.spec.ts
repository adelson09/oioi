import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanholPage } from './espanhol.page';

describe('EspanholPage', () => {
  let component: EspanholPage;
  let fixture: ComponentFixture<EspanholPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspanholPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanholPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
