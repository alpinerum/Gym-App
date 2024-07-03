import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartModelPage } from './cart-model.page';

describe('CartModelPage', () => {
  let component: CartModelPage;
  let fixture: ComponentFixture<CartModelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
