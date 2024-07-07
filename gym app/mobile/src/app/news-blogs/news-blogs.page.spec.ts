import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsBlogsPage } from './news-blogs.page';

describe('NewsBlogsPage', () => {
  let component: NewsBlogsPage;
  let fixture: ComponentFixture<NewsBlogsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
