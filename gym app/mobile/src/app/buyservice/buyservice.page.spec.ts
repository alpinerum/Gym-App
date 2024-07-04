import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyservicePage } from './buyservice.page';

describe('BuyservicePage', () => {
  let component: BuyservicePage;
  let fixture: ComponentFixture<BuyservicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
