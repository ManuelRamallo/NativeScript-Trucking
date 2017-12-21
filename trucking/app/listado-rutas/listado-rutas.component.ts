import { Component, OnInit } from '@angular/core';
import {RutasService} from '../services/rutas.service';
import {Rutas} from '../models/Rutas';

@Component({
  moduleId: module.id,
  selector: 'app-listado-rutas',
  templateUrl: './listado-rutas.component.html',
  styleUrls: ['./listado-rutas.component.scss']
})
export class ListadoRutasComponent implements OnInit {


  listaRutas:Rutas[]=[];

  constructor(private servicioRutas:RutasService) { }

  ngOnInit() {

    this.listaRutas= this.servicioRutas.mostrarRutas();

  }

}
