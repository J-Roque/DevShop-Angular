import { Component, OnInit } from '@angular/core';
import { Devshop } from 'src/app/interface/devshop';
import { CardService } from 'src/app/services/cardService..service';
import { HeaderService } from 'src/app/services/headerService.service';
import { ProductoCard } from 'src/app/interface/devshop';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  statusRegistro: boolean = false;
  products:Devshop[]=[];
  constructor(
    private headerService: HeaderService,
    private cardService:CardService
    ) { }

  ngOnInit() {
  //  this.cardService.showAllCardProd().subscribe(
  //   data=>{
  //     this.productsCarrd=data;
  //     this.productsCarrd.map(producto=>{
  //       console.log(producto);
        
  //     })
  //   }
  //  )
   
  }
  showAddCardPorduct(){

  }

  // Cerrar  carrito de productos
  closeMenu(nuevoValor: boolean) {
    this.headerService.setStatusMenuCart(nuevoValor);
  }



}
