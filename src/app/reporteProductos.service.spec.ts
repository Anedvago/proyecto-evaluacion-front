/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReporteProductosService } from './reporteProductos.service';

describe('Service: ReporteProductos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteProductosService]
    });
  });

  it('should ...', inject([ReporteProductosService], (service: ReporteProductosService) => {
    expect(service).toBeTruthy();
  }));
});
