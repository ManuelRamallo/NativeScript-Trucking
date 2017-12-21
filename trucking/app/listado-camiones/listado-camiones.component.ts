import { Component, OnInit } from '@angular/core';
import {Camiones} from '../models/Camiones';
import {CamionesService} from '../services/camiones.service';

@Component({
  moduleId: module.id,
  selector: 'app-listado-camiones',
  templateUrl: './listado-camiones.component.html',
  styleUrls: ['./listado-camiones.component.scss']
})
export class ListadoCamionesComponent implements OnInit {

  listadoCamiones:Camiones[]=[];


  constructor( private servicioCamiones: CamionesService ) { }

  ngOnInit() {

    this.listadoCamiones = this.servicioCamiones.mostrarCamiones();

  }

}
