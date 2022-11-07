import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {
    console.log('...............instanciando log service');
  }

  public info(mensaje: String) {
    console.log(mensaje);
  }
}
