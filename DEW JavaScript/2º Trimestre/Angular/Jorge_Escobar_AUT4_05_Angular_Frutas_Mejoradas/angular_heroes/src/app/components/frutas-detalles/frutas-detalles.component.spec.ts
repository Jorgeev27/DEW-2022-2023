import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasDetallesComponent } from './frutas-detalles.component';

describe('FrutasDetallesComponent', () => {
  let component: FrutasDetallesComponent;
  let fixture: ComponentFixture<FrutasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
