import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch } from './ng-switch';

describe('NgSwitch', () => {
  let component: NgSwitch;
  let fixture: ComponentFixture<NgSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
