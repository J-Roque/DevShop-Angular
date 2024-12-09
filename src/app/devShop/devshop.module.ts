import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { devShopRoutingModule } from './desshop-routing.module';
import { BuscadoProdComponent } from './components/buscadoProd/buscadoProd.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductsInfoComponent } from './pages/products-info/products-info.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { DevshopService } from '../services/devshopService.service';
import { ColeccionProdComponent } from './pages/coleccion-prod/coleccion-prod.component';
import { ColeccionComponent } from './pages/coleccion/coleccion.component';
import { ColeccionDefaul } from './components/colecionDefaul/coleccion.component';
import { SearchColeccionComponent } from './components/searchColeccion/searchColeccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinregistroComponent } from './components/sinregistro/sinregistro.component';



@NgModule({
  declarations: [
    HomeComponent,
    BuscadoProdComponent,
    SearchComponent,
    ProductsInfoComponent,
    ContactoComponent,
    ColeccionComponent,
    ColeccionProdComponent,
    ColeccionDefaul,
    SearchColeccionComponent,
    SinregistroComponent
  ],
  imports: [
    CommonModule,
    devShopRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers:[
    DevshopService
  ]
})
export class DevshopModule { }
