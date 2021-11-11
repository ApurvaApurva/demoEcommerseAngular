import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclothsComponent } from './addcloths.component';

describe('AddclothsComponent', () => {
  let component: AddclothsComponent;
  let fixture: ComponentFixture<AddclothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclothsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
