import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeliculaMarvelComponent } from './crear-pelicula-marvel.component';

describe('CrearPeliculaMarvelComponent', () => {
  let component: CrearPeliculaMarvelComponent;
  let fixture: ComponentFixture<CrearPeliculaMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeliculaMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPeliculaMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
