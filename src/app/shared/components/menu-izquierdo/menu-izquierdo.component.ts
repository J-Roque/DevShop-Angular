import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/headerService.service';

@Component({
  selector: 'app-menu-izquierdo',
  templateUrl: './menu-izquierdo.component.html',
  styleUrls: ['./menu-izquierdo.component.scss']
})
export class MenuIzquierdoComponent implements OnInit {

  constructor(private headerService:HeaderService) { }


  ngOnInit() {
  }
  closeMenu(nuevoValor: boolean){
    this.headerService.setStatusMenu(nuevoValor);
  }
}
