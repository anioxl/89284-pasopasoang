import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule,  NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
  

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbPaginationModule, NgbModalModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
    { path: 'articulos', component: ArticulosComponent }
  ]) ],
  
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent, MenuComponent, 
    ArticulosComponent, ModalDialogComponent ],
  
    bootstrap:    [ AppComponent ],
  
    providers: [
    { provide: APP_BASE_HREF, useValue: '/' }],
  
    entryComponents: [ModalDialogComponent]
})
export class AppModule { }

