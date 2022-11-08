import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  minutos: number=0;
  segundos: number=0;
  minutos2: number=0;
  segundos2: number=0;
  isPaused: boolean= true;
  buttonLabel: string="";
  buttonLabel2: string="";
  constructor() {
    this.reset();
    setInterval(() => this.tick(), 1000);
    setInterval(() => this.tack(), 1000);
  }

  reset() {
    this.minutos = 24;
    this.segundos = 59;
    this.minutos2 = 0;
    this.segundos2 = 0;
    this.buttonLabel = 'Start';
    this.buttonLabel2 = 'Start';
    this.togglePause();
  }

  ngOnInit(): void {}

  private tick() {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      if (--this.segundos2 < 0) {//va con el -- disminuyendo los segundos y dice que cuando sea menos que 0 los segundos se reinician
        this.segundos2 = 59;
        if (--this.minutos2 < 0) {//va con el -- disminuyendo los minutos y dice que cuando sea menos que 0 hace reset y resetea
          this.reset();
        }
      }
    }
  }

  private tack() {
    if (!this.isPaused) {
      this.buttonLabel2 = 'Pause';
      if (++this.segundos2 > 59) {//va con el -- disminuyendo los segundos y dice que cuando sea menos que 0 los segundos se reinician
        this.segundos = 0;
        if (++this.minutos2 > 25) {//va con el -- disminuyendo los minutos y dice que cuando sea menos que 0 hace reset y resetea
          this.reset();
        }
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minutos < 24 || this.segundos < 59) {//aqui cambia el texto del boton caundoel temporizados llea a 0
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  togglePause2() {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minutos2 > 24 || this.segundos2 > 59) {//aqui cambia el texto del boton caundoel temporizados llea a 0
      this.buttonLabel2 = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
