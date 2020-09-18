import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPeliculaComponent } from './ruta-editar-pelicula.component';

describe('RutaEditarPeliculaComponent', () => {
  let component: RutaEditarPeliculaComponent;
  let fixture: ComponentFixture<RutaEditarPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
