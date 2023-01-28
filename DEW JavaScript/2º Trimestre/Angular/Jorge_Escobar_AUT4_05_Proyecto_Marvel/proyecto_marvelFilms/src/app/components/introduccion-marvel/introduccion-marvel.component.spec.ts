import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionMarvelComponent } from './introduccion-marvel.component';

describe('IntroduccionMarvelComponent', () => {
  let component: IntroduccionMarvelComponent;
  let fixture: ComponentFixture<IntroduccionMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
