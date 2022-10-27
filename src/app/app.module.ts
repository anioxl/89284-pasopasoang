import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {ArticulosFamiliasComponent} from './components/articulos-familias/articulos-familias.component';
import {MenuComponent} from './components/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,RouterModule.forRoot([
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulosfamilias', component: ArticulosFamiliasComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent, MenuComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }

