import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaPeliculaComponent } from './ruta-lista-pelicula.component';

describe('RutaListaPeliculaComponent', () => {
  let component: RutaListaPeliculaComponent;
  let fixture: ComponentFixture<RutaListaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
