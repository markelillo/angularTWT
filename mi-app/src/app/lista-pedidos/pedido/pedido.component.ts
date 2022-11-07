import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  pedido: Pedido;
  constructor() {
    this.pedido = {
      id: 1,
      user: 'Pepe',
      entregado: true,
      fechaPedido: new Date(),
      desc: 'Pantalon',
    };
  }

  ngOnInit(): void {}
}
