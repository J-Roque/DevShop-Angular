import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuIzquierdoComponent } from './components/menu-izquierdo/menu-izquierdo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuIzquierdoComponent

  ],
  imports: [
    CommonModule,
  RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenuComponent

  ]
})
export class SharedModule { }
