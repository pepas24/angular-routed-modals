import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstItemComponent } from './create-first-item.component';

describe('CreateFirstItemComponent', () => {
  let component: CreateFirstItemComponent;
  let fixture: ComponentFixture<CreateFirstItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFirstItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFirstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
