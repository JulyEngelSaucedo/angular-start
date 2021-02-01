import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeClientesComponent } from './menu-de-clientes.component';

describe('MenuDeClientesComponent', () => {
  let component: MenuDeClientesComponent;
  let fixture: ComponentFixture<MenuDeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
