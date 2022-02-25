import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { DecrementarAction, IncrementarAction } from './contador/contador.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;
  constructor ( private store: Store<AppState>){ 
    this.store.select('contador').subscribe(contador => this.contador = contador )
  }
  incrementar(){
    const accion = new IncrementarAction();
    this.store.dispatch(accion) 
  }
  decrementar(){ 
    const accion = new DecrementarAction();
    this.store.dispatch(accion) 
  }
}
