/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenrecatComponent } from './genrecat.component';

describe('GenrecatComponent', () => {
  let component: GenrecatComponent;
  let fixture: ComponentFixture<GenrecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
