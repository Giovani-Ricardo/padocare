import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcessPage } from './acess.page';

describe('AcessPage', () => {
  let component: AcessPage;
  let fixture: ComponentFixture<AcessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
