import { Component, OnInit, PipeTransform } from '@angular/core';
import { DevshopService } from 'src/app/services/devshopService.service';
import { Devshop } from 'src/app/interface/devshop';
import { ProductoCard } from 'src/app/interface/devshop';
import { map } from 'rxjs';
import { CardService } from 'src/app/services/cardService..service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product: Devshop[] = [];
  imagenProduct?: string;
  colortema: any[] = [];
  statusActive: number = 0;
  statusActiveTalla: number = 0;
  nombreBtnActive: string = 'dark';
  tallaP: string = 'S';
  color_prod: string = 'negro';

  productCardShop = {
    codido_prod: '',
    tipo_prod: '',
    tipoArte: '',
    colorArte: '',
    color: '',
    coloProd: 'negro',
    tamaño: 'S',
    cantidad: 1,
    precio: 0,
    modo_tema: '',
  };

  constructor(
    private deshopService: DevshopService,
    private cardService: CardService
  ) {}
  ngOnInit() {
    this.productHome('angular', 'sudadera');
    // this.temaProduct('dark');
  }

  productHome(name: string, tipo_prod: string) {
    this.deshopService.getProduct(name, tipo_prod).subscribe((data) => {
      if (data.length !== 0) {
        this.product = data;
        console.log(this.product);

        this.temaProduct('dark');
        this.productCardShop.tipo_prod = tipo_prod;
      }
    });
  }

  // cambio de imagen

  cambioImgColor(imagen: string, i: number, nombre_color: any) {
    console.log(nombre_color);

    this.imagenProduct = imagen;
    // Actualiza el índice del botón seleccionado
    this.statusActive = i;
    this.productCardShop.color = imagen;
    this.color_prod = nombre_color;
  }

  temaProduct(tema: string) {
    this.productCardShop.modo_tema = tema;
    // Verificar si this.product tiene al menos un elemento
    if (this.product && this.product.length > 0) {
      if (tema === 'dark') {
        this.colortema = this.product[0].color.dark;
        this.imagenProduct = this.product[0].thema_imagen.oscuro;
        this.nombreBtnActive = tema;
      } else if (tema === 'ligth') {
        this.colortema = this.product[0].color.ligth;
        this.imagenProduct = this.product[0].thema_imagen.claro;
        this.nombreBtnActive = tema;
      }
    }
  }

  selectLenguae(leguage: string) {
    this.deshopService.getProduct(leguage, '').subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching de producto data', error);
      }
    );
  }
  cambioTalla(index: number, talla: string) {
    this.statusActiveTalla = index;
    this.productCardShop.tamaño = talla;
    this.tallaP = this.productCardShop.tamaño;
  }

  addToCard(
    idprod: number,
    nombre_prod: string,
    producto: string,
    precio: number,
    talla: string,
    imagenProduct: any,
    color_prods: string
  ) {
    // Crea un nuevo producto corregido
    const nuevoProducto: ProductoCard = {
      id_prod: idprod,
      nombre_prod: nombre_prod,
      producto: imagenProduct,
      coloProd: color_prods!,
      imgColor: imagenProduct!,
      tamano: talla,
      cantidad: 1,
      precio: precio,
    };
    this.cardService.getCardProduct(nuevoProducto);
  }
}
