import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css'],
})
export class EditarPedidoComponent implements OnInit {
  pedido: Pedido;
  nombre :string;
  constructor() {
    this.nombre="";
    this.pedido = {
      id: 0,
      desc: '',
      user: 'Patxi',
      fechaPedido: new Date(),
      entregado: true,
    };
  }

  ngOnInit(): void {}

  onUpdateDescPedido=(event:any)=>{
    console.log(" event.target.value",event)
    this.pedido.desc = event.target.value;
  }
}
