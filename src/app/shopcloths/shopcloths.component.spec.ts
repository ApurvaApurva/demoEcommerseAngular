import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopclothsComponent } from './shopcloths.component';

describe('ShopclothsComponent', () => {
  let component: ShopclothsComponent;
  let fixture: ComponentFixture<ShopclothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopclothsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
