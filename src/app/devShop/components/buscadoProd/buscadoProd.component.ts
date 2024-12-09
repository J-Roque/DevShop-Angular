import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { Coleccion, Devshop } from 'src/app/interface/devshop';
import { DevshopService } from 'src/app/services/devshopService.service';

@Component({
  selector: 'app-buscadoProd',
  templateUrl: './buscadoProd.component.html',
  styleUrls: ['./buscadoProd.component.scss']
})
export class BuscadoProdComponent implements OnInit {

  colecionProd:Coleccion[] =[];
  colecionProdCamiseta:Devshop[] =[];
  colecionSudadera:Devshop[] =[];
  formleguage = new FormControl('',Validators.required);


  constructor( private devshopService:DevshopService) { }
  ngOnInit() {
    this.showColeccion();
    this.showProductCamiseta();
    this.showProductSudadera();
  }
  showColeccion(){
    this.devshopService.getProductColeccion().subscribe(
      data=>{
          this.colecionProd= data;
      }
    )
  }
  showProductCamiseta(){
    this.devshopService.getAllProduct().subscribe(
      data=>{
        this.colecionProdCamiseta = data.filter(item =>item.tipo_prod ==='camiseta');
      }
    )
  }
  showProductSudadera(){
    this.devshopService.getAllProduct().subscribe(
      data=>{
        this.colecionSudadera = data.filter(item =>item.tipo_prod ==='sudadera');
        
      }
    )
  }

}
