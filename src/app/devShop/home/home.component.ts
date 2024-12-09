import { Component, OnInit, PipeTransform } from '@angular/core';
import { DevshopService } from 'src/app/services/devshopService.service';
import { Devshop } from 'src/app/interface/devshop';
import { ProductoCard } from 'src/app/interface/devshop';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Devshop[] = []
  imagenProduct?: string;
  colortema: any[] = [];
  statusActive: number = 0;
  statusActiveTalla: number = 0
  nombreBtnActive: string = 'dark';


  productCardShop = {
    tipo_prod: '',
    nombre_prod: '',
    tipoArte: '',
    colorArte: '',
    color:'',
    coloProd: '',
    tamaño: '',
    cantidad: 1,
    precio: 0,
    modo_tema:'' 
  };
  

  constructor(private deshopService: DevshopService) { }
  ngOnInit() {
    this.productHome('angular', 'sudadera');
    // this.temaProduct('dark');
  }

  productHome(name: string, tipo_prod: string) {
    this.deshopService.getProduct(name, tipo_prod).subscribe(
      data => {
        if (data.length !== 0) {
          this.product = data;
          this.temaProduct('dark');
          this.productCardShop.tipo_prod = tipo_prod;
        }
      }
    )
  }

  // cambio de imagen


  cambioImgColor(imagen: string, i: number) {
    this.imagenProduct = imagen;
    // Actualiza el índice del botón seleccionado
    this.statusActive = i;
    this.productCardShop.color = imagen;

  }
  temaProduct(tema: string) {
    this.productCardShop.modo_tema = tema;

    // Verificar si this.product tiene al menos un elemento
    if (this.product && this.product.length > 0) {
      if (tema === 'dark') {
        this.colortema = this.product[0].color.dark;
        this.product.map((item => {
          this.imagenProduct = item.thema_imagen.oscuro;
          this.nombreBtnActive = tema;
        }));

      }

      if (tema === 'ligth') {
        this.colortema = this.product[0].color.ligth;
        this.product.map((item => {
          this.imagenProduct = item.thema_imagen.claro;
          this.nombreBtnActive = tema;

        }));
      }
    }

  }

  selectLenguae(leguage: string) {
    this.deshopService.getProduct(leguage, '').subscribe(
      data => {
        this.product = data;
      }
    )
  }
  cambioTalla(index: number,talla:string) {
    this.statusActiveTalla = index;
    this.productCardShop.tamaño = talla
  }

  addCardList() {

   this.product.forEach(element => {
    this.productCardShop.precio = element.precio;
    this.productCardShop.nombre_prod = element.nombre_prod;
    this.productCardShop.tamaño = element.talla[0];
    this.productCardShop.color = element.color.dark[0].image;
      
    });
    console.log(this.productCardShop);
    


  }


}




