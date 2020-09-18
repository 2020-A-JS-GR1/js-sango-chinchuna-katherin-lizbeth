import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarGeneroComponent } from './ruta-editar-genero.component';

describe('RutaEditarGeneroComponent', () => {
  let component: RutaEditarGeneroComponent;
  let fixture: ComponentFixture<RutaEditarGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
