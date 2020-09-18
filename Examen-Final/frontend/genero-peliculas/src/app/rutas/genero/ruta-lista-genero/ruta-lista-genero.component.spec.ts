import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaGeneroComponent } from './ruta-lista-genero.component';

describe('RutaListaGeneroComponent', () => {
  let component: RutaListaGeneroComponent;
  let fixture: ComponentFixture<RutaListaGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
