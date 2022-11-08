import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  pedido: Pedido;
  constructor(private router:ActivatedRoute, private pedserv :PedidoService) {
    this.pedido = {
      id: 1,
      user: 'Pepe',
      entregado: true,
      fechaPedido: new Date(),
      desc: 'Pantalon',
    };
    //router es un objeto qe tiene la id actual
    var id = this.router.snapshot.params['id'];
    this.pedido = this.pedserv.getPedido(id);
  }

  ngOnInit(): void {}
}
