import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemPostComponent } from './single-item-post.component';

describe('SingleItemPostComponent', () => {
  let component: SingleItemPostComponent;
  let fixture: ComponentFixture<SingleItemPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleItemPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
