import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _statusMenuCart: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  statusMenuCart$ = this._statusMenuCart.asObservable();


  private _statusMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  statusMenu$ = this._statusMenu.asObservable();

constructor() { }
  
setStatusMenuCart(value: boolean) {
  this._statusMenuCart.next(value);
}

setStatusMenu(value: boolean) {
  this._statusMenu.next(value);
}
actualizarStatusMenuCart(nuevoValor: boolean) {
  this.setStatusMenuCart(nuevoValor);
}
actualizarStatusMenu(nuevoValor: boolean) {
  this.setStatusMenu(nuevoValor);
}
}
