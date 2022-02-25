import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ResetAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
  contadorNieto!: number;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contadorNieto = contador )
  }
  reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion) 
  }
}
