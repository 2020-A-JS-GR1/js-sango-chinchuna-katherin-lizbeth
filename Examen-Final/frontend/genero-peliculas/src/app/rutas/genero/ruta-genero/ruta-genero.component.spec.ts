import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGeneroComponent } from './ruta-genero.component';

describe('RutaGeneroComponent', () => {
  let component: RutaGeneroComponent;
  let fixture: ComponentFixture<RutaGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
