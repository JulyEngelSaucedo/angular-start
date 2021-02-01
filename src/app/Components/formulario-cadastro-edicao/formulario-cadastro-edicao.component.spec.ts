import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroEdicaoComponent } from './formulario-cadastro-edicao.component';

describe('FormularioCadastroEdicaoComponent', () => {
  let component: FormularioCadastroEdicaoComponent;
  let fixture: ComponentFixture<FormularioCadastroEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCadastroEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCadastroEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
