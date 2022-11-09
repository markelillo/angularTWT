import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  pedido: Pedido;
  paramSuscription:Subscription;
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
     //nos suscribimos al cambio de la url
     this.paramSuscription = this.router.params.subscribe(//lo de params es los parametros de la url espera a sus cambios
      (params:Params)=>{
        this.pedido= this.pedserv.getPedido(params['id']);
      }//EN EL CONSTRUCTOR TE SUSCRIBES Y LE DICES A LA FUNCION QUE PASA CUANDO HAY UN CAMBIO EN LA URL
     );//MUY IMPORTATE SI TIENES QUE IR A UNA URL EN ESPECIFICO!!!!!!!!!!!!!!!!!!!!!!!
  }

  ngOnInit(): void {}
}
