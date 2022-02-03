import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formCantProd',
  templateUrl: './formCantProd.component.html',
  styleUrls: ['./formCantProd.component.css'],
})
export class FormCantProdComponent implements OnInit {
  @Output() enviarCant = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  cantidad: number;

  enviarCantidad() {
    this.enviarCant.emit(this.cantidad);
  }
}
