/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormCantProdComponent } from './formCantProd.component';

describe('FormCantProdComponent', () => {
  let component: FormCantProdComponent;
  let fixture: ComponentFixture<FormCantProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCantProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCantProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
