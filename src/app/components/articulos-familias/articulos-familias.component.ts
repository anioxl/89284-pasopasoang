import { Component, OnInit } from '@angular/core';
import { ArticulosFamilias, ArticuloFamilia} from '../../models/articulos-familias';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {
  Items = ArticuloFamilia;
  Titulo = "Articulos Familias"

  constructor() { }

  ngOnInit() {
  }

}