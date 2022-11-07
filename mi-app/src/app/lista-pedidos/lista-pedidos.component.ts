import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  estadoListadoPedido: String = 'Entregado'
  //una instancia del service y tambien lo declaro como como atributo
  constructor(private log: LogService) {
    this.pedidos = [
      {
        id: 1,
        user: 'luis',
        desc: 'pizza',
        fechaPedido: new Date(),
        entregado: false,
      },

      {
        id: 2,
        user: 'pepe',
        desc: 'burger',
        fechaPedido: new Date(),
        entregado: true,
      },
      {
        id: 3,
        user: "Maite",
        desc: "Camisa",
        fechaPedido: new Date(),
        entregado: false
      }

    ];
  }

  ngOnInit(): void {}

  public onAltaPedido(): void {
    console.log('pepe');

    this.log.info('pepe');
  }
}
