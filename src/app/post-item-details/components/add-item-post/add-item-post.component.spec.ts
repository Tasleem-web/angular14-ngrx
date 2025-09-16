import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPostComponent } from './add-item-post.component';

describe('AddItemPostComponent', () => {
  let component: AddItemPostComponent;
  let fixture: ComponentFixture<AddItemPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
