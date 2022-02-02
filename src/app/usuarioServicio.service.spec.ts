/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioServicioService } from './usuarioServicio.service';

describe('Service: UsuarioServicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioServicioService]
    });
  });

  it('should ...', inject([UsuarioServicioService], (service: UsuarioServicioService) => {
    expect(service).toBeTruthy();
  }));
});
