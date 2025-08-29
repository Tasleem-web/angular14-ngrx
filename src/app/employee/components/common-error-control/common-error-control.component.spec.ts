import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorControlComponent } from './common-error-control.component';

describe('CommonErrorControlComponent', () => {
  let component: CommonErrorControlComponent;
  let fixture: ComponentFixture<CommonErrorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonErrorControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonErrorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
