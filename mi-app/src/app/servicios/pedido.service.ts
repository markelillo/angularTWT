import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  pedidos: Pedido[] = [];
  constructor() {
    this.pedidos = [
      {
        id: 1,
        user: 'luis',
        desc: 'Cangreburger',
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
        user: 'Maite',
        desc: 'Camisa',
        fechaPedido: new Date(),
        entregado: false,
      },
    ];
  }

  /**
   * getAll
   */
  public getAll() {
    return this.pedidos;
  }

  /**
   * name
   */
  public name(p:Pedido) {
    return this.pedidos.push(p);
  }
  /**
   * CambiarEstadoPedido
   */
  public CambiarEstadoPedido(id:number, entreado:boolean) {//busca el id pasado y cambia el elado que le has pasado
    this.pedidos.forEach(p=>{
      if(p.id == id){p.entregado = entreado}

    })
  }

  public getPedido(idPed: number): Pedido{      
    var pedido !: Pedido;//lo que hace la ! es que lo declaras pero o lo teines que incializar
    this.pedidos.forEach(p => {
      if(p.id == idPed) { 
       pedido = p;
      }
    });
    return pedido;
  }

}
