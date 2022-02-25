import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { DividirAction, MultiplicarAction } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
  contadorHijo!: number;

  constructor( private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contadorHijo = contador )
  }
  multiplicar(){
    const accion = new MultiplicarAction(3);
    this.store.dispatch(accion) 
  }
  dividir(){
    const accion = new DividirAction(3);
    this.store.dispatch(accion) 
  }
}
