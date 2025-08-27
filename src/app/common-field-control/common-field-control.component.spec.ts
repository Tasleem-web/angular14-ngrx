import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFieldControlComponent } from './common-field-control.component';

describe('CommonFieldControlComponent', () => {
  let component: CommonFieldControlComponent;
  let fixture: ComponentFixture<CommonFieldControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFieldControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonFieldControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
