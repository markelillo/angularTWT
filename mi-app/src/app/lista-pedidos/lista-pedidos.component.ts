import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';
import { PedidoService } from '../servicios/pedido.service';
import { PedidosHttpService } from '../servicios/pedidos-http.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
  providers: [LogService],
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  estadoListadoPedido: String = 'Entregado';
  modoNuevo: boolean = true;
  //una instancia del service y tambien lo declaro como como atributo

  constructor(
    private log: LogService,
    private pedsServ: PedidoService,
    private router: Router,
    private pedidosService : PedidosHttpService
  ) {
    pedidosService.getAll().subscribe(
      (lista:Pedido[])=>this.pedidos=lista
    )
    /*[
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
        user: 'Maite',
        desc: 'Camisa',
        fechaPedido: new Date(),
        entregado: false,
      },
    ];*/
  }
  //primero el construor y luego el oninit
  ngOnInit(): void {}

  public onAltaPedido(): void {
    console.log('pepe');

    this.log.info('pepe');
    this.router.navigate(['/pedido/edit']);
  }

  /**
   * onTerminoEntrega
   */
  public onTerminoEntrega(id: number) {
    console.log('me notifican que ha cambiado pedido' + id);
   // this.pedidos = this.pedsServ.getAll(); //resetea la lista

   this.pedidosService.getAll().subscribe(
    (lista:Pedido[])=>this.pedidos=lista
  );
  }
}
