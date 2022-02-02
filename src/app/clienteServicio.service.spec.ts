/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClienteServicioService } from './clienteServicio.service';

describe('Service: ClienteServicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteServicioService]
    });
  });

  it('should ...', inject([ClienteServicioService], (service: ClienteServicioService) => {
    expect(service).toBeTruthy();
  }));
});
