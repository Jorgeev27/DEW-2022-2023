import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFrutaComponent } from './crear-fruta.component';

describe('CrearFrutaComponent', () => {
  let component: CrearFrutaComponent;
  let fixture: ComponentFixture<CrearFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFrutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
