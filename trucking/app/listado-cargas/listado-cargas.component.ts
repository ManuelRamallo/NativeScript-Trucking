import { Component, OnInit } from '@angular/core';
import {cargaService} from '../services/carga.service';
import {Carga} from '../models/Carga';

@Component({
  moduleId: module.id,
  selector: 'app-listado-cargas',
  templateUrl: './listado-cargas.component.html',
  styleUrls: ['./listado-cargas.component.scss']
})
export class ListadoCargasComponent implements OnInit {

  listaCarga:Carga[]=[]

  constructor(private cargasService: cargaService) { }

  ngOnInit() {

    this.listaCarga= this.cargasService.mostrarCarga();
  }

}
