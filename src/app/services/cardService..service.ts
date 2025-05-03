import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { ProductoCard } from "src/app/interface/devshop";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private productoCard: ProductoCard[] = [];
  private numProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _products: BehaviorSubject<ProductoCard[]> = new BehaviorSubject<ProductoCard[]>([]);
  private isCartEmpty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}

  // Método para obtener el carrito como observable
  showAllCardProd(): Observable<ProductoCard[]> {
    return this._products.asObservable();
  }

  isCartEmpty$(): Observable<boolean> {
    return this.isCartEmpty.asObservable();
  }

  // Agregar productos al carrito (consolidando duplicados)
  getCardProduct(producto: ProductoCard) {
    // Buscar el producto por ID, Color y Talla
    const existingProduct = this.productoCard.find(
      p => p.id_prod === producto.id_prod && p.coloProd === producto.coloProd && p.tamano === producto.tamano
    );

    if (existingProduct) {
      // Si ya existe el mismo producto (mismo color y talla), solo aumentar la cantidad
      existingProduct.cantidad += 1;
    } else {
      // Si es un producto nuevo (diferente color o talla), agregarlo al carrito
      this.productoCard.push({ ...producto, cantidad: 1 });
    }

    this.updateCartState();
  }

  // Aumentar la cantidad de un producto en el carrito
  increaseQuantity(producto: ProductoCard) {
    const product = this.productoCard.find(p => 
      p.id_prod === producto.id_prod && 
      p.coloProd === producto.coloProd && 
      p.tamano === producto.tamano
    );

    if (product) {
      product.cantidad += 1;
      this.updateCartState();
    }
  }

  // Disminuir la cantidad de un producto en el carrito o eliminarlo si llega a 0
  decreaseQuantity(producto: ProductoCard) {
    const product = this.productoCard.find(p => 
      p.id_prod === producto.id_prod && 
      p.coloProd === producto.coloProd && 
      p.tamano === producto.tamano
    );

    if (product) {
      if (product.cantidad > 1) {
        product.cantidad -= 1;
      } else {
        this.removeProduct(producto);
      }
      this.updateCartState();
    }
  }

  // Eliminar un producto completamente del carrito
  removeProduct(producto: ProductoCard) {
    this.productoCard = this.productoCard.filter(p => 
      !(p.id_prod === producto.id_prod && p.coloProd === producto.coloProd && p.tamano === producto.tamano)
    );

    this.updateCartState();
  }

  // Contar la cantidad total de productos en el carrito
  countCardProd(): Observable<number> {
    return this._products.asObservable().pipe(
      map(products => products.reduce((total, prod) => total + prod.cantidad, 0))
    );
  }

  // Contar la cantidad de productos únicos en el carrito
  countUniqueProducts(): Observable<number> {
    return this._products.asObservable().pipe(
      map(products => products.length)
    );
  }

  // Método privado para actualizar el estado del carrito
  private updateCartState() {
    this._products.next([...this.productoCard]); // Enviar nueva referencia para que Angular detecte cambios
    this.isCartEmpty.next(this.productoCard.length === 0);
  }


  
}
