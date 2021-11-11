import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclothsComponent } from './viewcloths.component';

describe('ViewclothsComponent', () => {
  let component: ViewclothsComponent;
  let fixture: ComponentFixture<ViewclothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewclothsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
