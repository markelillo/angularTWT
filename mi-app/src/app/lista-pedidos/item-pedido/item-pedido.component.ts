import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { LogService } from 'src/app/servicios/log.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

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


  @Output() entregaRealizada :EventEmitter<number>=new EventEmitter<number>();

  constructor(private log: LogService,
    private pedServ:PedidoService) {}

  ngOnInit(): void {
    this.log.info('pepe');
  }

  onEntregaRealizada(){
    console.log("llamar a un servicio que diga que esta etreado");
    this.entregaRealizada.emit(this.id);
    this.pedServ.CambiarEstadoPedido(this.id, true)
  }
}
