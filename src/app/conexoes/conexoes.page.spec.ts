import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConexoesPage } from './ConexoesPage';

describe('ConexoesPage', () => {
  let component: ConexoesPage;
  let fixture: ComponentFixture<ConexoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConexoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
