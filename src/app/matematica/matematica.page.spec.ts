import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicaPage } from './matematica.page';

describe('MatematicaPage', () => {
  let component: MatematicaPage;
  let fixture: ComponentFixture<MatematicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
