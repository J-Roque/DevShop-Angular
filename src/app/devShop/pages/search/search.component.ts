import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Devshop } from 'src/app/interface/devshop';
import { DevshopService } from 'src/app/services/devshopService.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  colecionProd:Devshop[] =[];
  prodList:Devshop[]=[];

  formleguage = new FormControl('',Validators.required);
 
  constructor( 
    private devshopService:DevshopService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    if(this.activateRoute.params !== undefined){
      console.log('ok');
      
    }
    // .pipe(
    //   switchMap(({leguage})=> this.devshopService.getAllProductLenguage(leguage)),
    // ).subscribe(data=>{
    //   if(!data || Object.keys(data).length === 0){
    //     return this.router.navigate(['colecion']);
    //   }
    //   this.colecionProd= data.filter(item=>item.tipo_prod=="sudadera");
    //   this.prodList= data;
    //   return;
    // })

  }

  seachLenguageProd(){
    // this.devshopService.getAllProductLenguage(this.formleguage.value)
  }

}
