import { Component, OnInit } from '@angular/core';
import { Devshop } from 'src/app/interface/devshop';
import { CardService } from 'src/app/services/cardService..service';
import { HeaderService } from 'src/app/services/headerService.service';
import { ProductoCard } from 'src/app/interface/devshop';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  statusRegistro: boolean = false;
  products:Devshop[]=[];
  productsCarrd:ProductoCard[]=[];
  numProductosEnCarrito: number = 0;
  constructor(
    private headerService: HeaderService,
    private cardService:CardService,
    ) { }

    ngOnInit() {
      this.cardService.showAllCardProd().subscribe(cart => {
        this.productsCarrd = cart;
      });
      this.cardService.isCartEmpty$().subscribe(isEmpty  => {
        this.statusRegistro = isEmpty;
      });
      this.cardService.countCardProd().subscribe(numProductos => {
        this.numProductosEnCarrito = numProductos; // Actualizar el valor en el componente
      });
    }
    
    increaseQuantity(product: ProductoCard) {
      this.cardService.increaseQuantity(product);
    }
    
    decreaseQuantity(product: ProductoCard) {
      this.cardService.decreaseQuantity(product);
    }
    
    removeProduct(product: ProductoCard) {
      this.cardService.removeProduct(product);
    }
    
  // Cerrar  carrito de productos
  closeMenu(nuevoValor: boolean) {
    this.headerService.setStatusMenuCart(nuevoValor);
  }
  // Calcular el subtotal
  calculateSubtotal(): number {
    return this.productsCarrd.reduce((total, product) => total + (product.precio * product.cantidad), 0);
  }

}
