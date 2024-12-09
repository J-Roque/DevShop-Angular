import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Coleccion, ProdColeccion } from 'src/app/interface/devshop';
import { DevshopService } from 'src/app/services/devshopService.service';
@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})
export class ColeccionComponent implements OnInit {
  colecionProd:Coleccion[] =[];
  formleguage = new FormControl('',Validators.required);

  constructor( private devshopService:DevshopService) { }
  ngOnInit() {
    this.showColeccion();
   
  }
  showColeccion(){
    this.devshopService.getProductColeccion().subscribe(
      data=>{
          this.colecionProd= data;
      }
    )
  }

  
 
}
