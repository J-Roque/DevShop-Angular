import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DevshopService } from 'src/app/services/devshopService.service';
import { ProdColeccion } from 'src/app/interface/devshop';
@Component({
  selector: 'app-coleccion-prod',
  templateUrl: './coleccion-prod.component.html',
  styleUrls: ['./coleccion-prod.component.scss']
})
export class ColeccionProdComponent implements OnInit {
  prodcoleccion:ProdColeccion[]=[];
  constructor( 
    private devshopService: DevshopService,
    private activateRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activateRoute.params
    .pipe(
      switchMap(({lenguage})=> this.devshopService.getColeccionProd(lenguage)),
     ).subscribe(data=>{
    
      if (!data || Object.keys(data).length === 0) {
        return this.router.navigate(['']);
      }
      this.prodcoleccion = data;
      return;
     })
  }
  

}
