import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearGeneroComponent } from './ruta-crear-genero.component';

describe('RutaCrearGeneroComponent', () => {
  let component: RutaCrearGeneroComponent;
  let fixture: ComponentFixture<RutaCrearGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
