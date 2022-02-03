/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetalleService } from './detalle.service';

describe('Service: Detalle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleService]
    });
  });

  it('should ...', inject([DetalleService], (service: DetalleService) => {
    expect(service).toBeTruthy();
  }));
});
