import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductoCard } from 'src/app/interface/devshop';
import { CardService } from 'src/app/services/cardService..service';
import { HeaderService } from 'src/app/services/headerService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  statusMenuCart$: Observable<boolean>;
  statusMenu$: Observable<boolean>;

  numProductosEnCarrito: number = 0;
  numProductSubscription: Subscription | undefined;
//varible contenedor de productos de carrto de compra
  productsCarrd:ProductoCard[]=[];

  constructor(
    private headerService:HeaderService,
    private cardService:CardService
    ) {
    this.statusMenuCart$ = this.headerService.statusMenuCart$;
    this.statusMenu$ = this.headerService.statusMenu$;
   }
  

  ngOnInit() {
    this.numProductSubscription = this.cardService.countCardProd().subscribe(numProductos => {
      this.numProductosEnCarrito = numProductos; // Actualizar el valor en el componente
    });
    // contador de productos
 
  }

  showCart(nuevoValor: boolean){
    this.headerService.setStatusMenuCart(nuevoValor);
    // aca debe ejecutarse la logica pra mostrar productos
    this.cardService.showAllCardProd().subscribe(
      data=>{
        this.productsCarrd=data;
        // return console.log(this.productsCarrd);
        
      }
    );
  }
  
 showMenu(nuevoValor: boolean){
  this.headerService.setStatusMenu(nuevoValor);
 }

 showTotalProd(){
  this.cardService.countCardProd().subscribe(
    data=>{
      console.log(data);
      alert('daa');
      
    }
  )
 }
//  contador de productos
 
}
