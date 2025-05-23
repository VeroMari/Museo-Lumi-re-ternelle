import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturaDetalleComponent } from './pintura-detalle.component';

describe('PinturaDetalleComponent', () => {
  let component: PinturaDetalleComponent;
  let fixture: ComponentFixture<PinturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinturaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
