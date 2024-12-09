import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductsInfoComponent } from './pages/products-info/products-info.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ColeccionProdComponent } from './pages/coleccion-prod/coleccion-prod.component';
import { ColeccionComponent } from './pages/coleccion/coleccion.component';
import { ColeccionDefaul } from './components/colecionDefaul/coleccion.component';
import { SearchColeccionComponent } from './components/searchColeccion/searchColeccion.component';
import { SinregistroComponent } from './components/sinregistro/sinregistro.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'colecion',
    component:ColeccionComponent},
    // children:[
    //     {path:'',component:ColeccionDefaul},
    //     {path:'search/:leguage',component:SearchColeccionComponent}

    // ]},
    {path:'colecion/:lenguage',component:ColeccionProdComponent},
    {path:'colecion/:lenguage/:nombre_prod',component:ProductsInfoComponent},
    {path:'search',
    component:SearchComponent,
        children:[
      {path:'',component:SinregistroComponent},
      {path:':leguage',component:SearchColeccionComponent}
        ]   
    },
    {path:'contacto',component:ContactoComponent},
    // {path:'**',redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class devShopRoutingModule { }
