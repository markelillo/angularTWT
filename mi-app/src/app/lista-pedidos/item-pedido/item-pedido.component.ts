import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PedidosHttpService } from 'src/app/servicios/pedidos-http.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css'],
  // providers:[LogService]//para decirle que el service va aestar solo para el componente y sus hijos
})
export class ItemPedidoComponent implements OnInit {
  @Input() id: number = 0;
  @Input() descripcion: string = '';
  @Input() entregado: boolean = false;

  @Output() entregaRealizada: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private log: LogService,
    private pedServ: PedidoService,
    private httpPedido: PedidosHttpService
  ) {}

  ngOnInit(): void {
    this.log.info('pepe');
  }

  onEntregaRealizada() {
    console.log('llamar a un servicio que diga que esta etreado');
    this.entregaRealizada.emit(this.id);
    let paModificar = {id: this.id,desc:this.descripcion,user:'markeletx', entregado:true, fechaPedido:new Date()}
    this.httpPedido.update(paModificar).subscribe(
      (p:Pedido)=>  //emito un evento para que el padre sepa que he entregado
      this.entregaRealizada.emit(this.id)

    )
   // this.pedServ.CambiarEstadoPedido(this.id, true);
  }

  onBorrarPedido() {
    console.log('llamar a borrar');
    //this.entregaRealizada.emit(this.id);
    this.httpPedido.borrarPedido(this.id).subscribe(
      (resultado) => {
        console.log('borrado' + resultado);
        this.entregaRealizada.emit(this.id);
      },
      (error) => console.error('ERROR', error.message)
    );
  }
}
