import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortuguesPage } from './portugues.page';

describe('PortuguesPage', () => {
  let component: PortuguesPage;
  let fixture: ComponentFixture<PortuguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortuguesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortuguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
