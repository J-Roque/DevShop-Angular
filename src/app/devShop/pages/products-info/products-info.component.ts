import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevshopService } from 'src/app/services/devshopService.service';
import { Devshop } from 'src/app/interface/devshop';
import { ProductoCard } from 'src/app/interface/devshop';
import { switchMap } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { CardService } from 'src/app/services/cardService..service'; 
@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.scss']
})
export class ProductsInfoComponent implements OnInit {

  devshop:Devshop[]=[];
  imagenProduct?: string;
  colorImage:any[]=[];
  productoCard: ProductoCard[] = [];

  selectedSize: string ='';
  imgColor!:string;
  colorProd!:string;

  constructor(
    private devshopService:DevshopService,
    private router: Router,
    private activateRoute:ActivatedRoute,
    private cardService:CardService
    ) { }

  ngOnInit() {
    
    this.activateRoute.params
    .pipe(
      switchMap(({lenguage,nombre_prod})=> this.devshopService.getProcutcInfo(lenguage,nombre_prod)),
    ).subscribe(data=>{
      if (!data || Object.keys(data).length === 0) {
        return this.router.navigate(['/colecion']);
      }
      this.devshop = data;
      this.temaProduct('dark');
      console.log(this.devshop);
      
      
      return;
    });


  }

  cambioImgColor(image:string){
    this.imagenProduct = image
    // this.productoCard[0].tipoArte = image;
  }

  temaProduct(tema: string) {
    // Verificar si this.product tiene al menos un elemento
    if (this.devshop && this.devshop.length > 0) {
      if (tema === 'dark') {
        this.colorImage = this.devshop[0].color.dark;
      }
    }  
  }
  tallaProd(talla:string){
    // this.productoCard[0].tamaño = talla;
  }

  
  addToCard(precio:number,nombre_Prod:string,tipo_prod:string,
    tamaño:string,image:string,colorimg:string){
    this.cardService.getCardProduct(precio,nombre_Prod,tipo_prod,
      tamaño,image,colorimg)
    // if (tamaño == undefined || image == undefined) {
    //   this.devshop.map((item=>{
    //     tamaño =item.talla[0];
    //     image = item.color.dark[0].image;
    //     colorimg = item.color.dark[0].nombre_color;
    //   }))
    // }

    // const nuevoProducto: ProductoCard = {
    //   nombre_prod: nombre_Prod,
    //   producto: tipo_prod,
    //   coloProd: colorimg,
    //   imgColor:image,
    //   tamaño: tamaño,
    //   cantidad: 1,
    //   precio: precio
    // };
    // this.productoCard.push(nuevoProducto);
    // console.log(this.productoCard);
  }
}
