import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //atributos
  title = 'mi-app';
  usuario: String = 'Markel';
  observable!:Observable<number>;
  constructor() {}
  /**
   * onIniciarObservable
   */
  public onIniciarObservable() {
    this.observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  onSuscribirnosAlObservable = () =>{
    this.observable.subscribe(
      n=>console.log('recogo' +n),
      error => console.log('se produjo un error', error),
      () =>console.log('se completo')
      )//se esciben res funciones por que el .subscribe te lo permite y las tiene 1-n cuando hace el next 2-cuando le llega el error 3- cuando lel llega el complete
  }
}
