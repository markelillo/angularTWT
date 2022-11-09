import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosHttpService {
  private urlBase: string = 'http://localhost:8080/ws';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  //get all
  /**
   * getAll
   */
  public getAll(): Observable<Pedido[]> {
    //en<> dices que tipo de dato te va a devolver
    const url = this.urlBase + '/pedidos';
    return this.http.get<Pedido[]>(url, this.httpOptions);
  }
  //getby id
  public getById(id: number): Observable<Pedido> {
    const url = this.urlBase + '/pedidos/' + id;
    return this.http.get<Pedido>(url, this.httpOptions);
  }
  //add
  public add(pedido: Pedido): Observable<Pedido> {
    const url = this.urlBase + '/pedidos';
    return this.http.post<Pedido>(url, this.httpOptions);
  }
  //delete

  public borrarPedido(id: number): Observable<never> {
    //en<> dices que tipo de dato te va a devolver
    const url = this.urlBase + '/pedidos/delete/' + id;
    return this.http.delete<never>(url);
  }
  //update

  public update(pedido: Pedido): Observable<Pedido> {
    const url = this.urlBase + '/pedidos/';
    return this.http.put<Pedido>(url,pedido, this.httpOptions);
  }
}
