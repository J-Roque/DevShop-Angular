import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Devshop } from 'src/app/interface/devshop';
import { DevshopService } from 'src/app/services/devshopService.service';

@Component({
  selector: 'app-searchColeccion',
  templateUrl: './searchColeccion.component.html',
  styleUrls: ['./searchColeccion.component.scss']
})
export class SearchColeccionComponent implements OnInit {
  colecionProd:Devshop[]=[];
  prodList:Devshop[]=[];
  constructor( 
    private devshopService:DevshopService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.activateRoute.params
    .pipe(
      switchMap(({leguage})=> this.devshopService.getAllProductLenguage(leguage)),
    ).subscribe(data=>{
      if(!data || Object.keys(data).length === 0){
        return this.router.navigate(['search']);
      }
      this.colecionProd= data.filter(item=>item.tipo_prod=="sudadera");
      this.prodList= data;
      return;
    })

  }

}
