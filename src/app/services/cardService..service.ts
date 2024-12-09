import { Injectable } from "@angular/core";
import { Devshop } from "../interface/devshop";
import { ProductoCard } from 'src/app/interface/devshop';
import { BehaviorSubject, Observable, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  devshop: Devshop[] = [];
  productoCard: ProductoCard[] = [];
  private numProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _products: BehaviorSubject<ProductoCard[]> = new BehaviorSubject<ProductoCard[]>([]); // Este es el BehaviorSubject que emite los productos
  
  getCardProduct(precio: number, nombre_Prod: string, tipo_prod: string,
    tamaño: string, image: string, colorimg: string) {

    // Por defecto tomara valores  iniciales en posicion 0
    if (tamaño == undefined || image == undefined) {
      this.devshop.map((item => {
        tamaño = item.talla[0];
        image = item.color.dark[0].image;
        colorimg = item.color.dark[0].nombre_color;
      }))
    }

    //aignacion de valores
    const nuevoProducto: ProductoCard = {
      nombre_prod: nombre_Prod,
      producto: tipo_prod,
      coloProd: colorimg,
      imgColor: image,
      tamaño: tamaño,
      cantidad: 1,
      precio: precio
    };
    // Agregamos el objeto de productos al arrya de interface
    this.productoCard.push(nuevoProducto);
    console.log(this.productoCard);

    this.numProduct.next(this.productoCard.length);
    this._products.next(this.productoCard);

  }

  // Método para contar la cantidad de productos en el carrito y devolver un Observable
  countCardProd(): Observable<number> {
    return this.numProduct.asObservable(); // Devolver el Observable del BehaviorSubject
  }
 // Si 'this.productoCard' es un Observable de productos
   showAllCardProd(): Observable<ProductoCard[]> {
    return this._products.asObservable();
      // Devolvemos el Observable que contiene el array de productos
  }

}

  