import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenPage } from './geren.page';

describe('GerenPage', () => {
  let component: GerenPage;
  let fixture: ComponentFixture<GerenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
