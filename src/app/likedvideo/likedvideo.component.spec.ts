/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikedvideoComponent } from './likedvideo.component';

describe('LikedvideoComponent', () => {
  let component: LikedvideoComponent;
  let fixture: ComponentFixture<LikedvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
