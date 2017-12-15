import { Injectable } from '@angular/core';
import {CargasComponent} from '../cargas/cargas.component';
import {Carga} from '../models/Carga';

@Injectable()
export class cargaService {

  constructor() { }

    private carga = new Array<Carga>(
        { id: 1, tipoCarga:"Frágil",cantidad:200},
        { id: 2, tipoCarga:"Peligroso",cantidad:100},
        { id: 3, tipoCarga:"Explosivos",cantidad:60},
        { id: 4, tipoCarga:"Líquidos inflamables",cantidad:50},
        { id: 5, tipoCarga:"Material radiactivo",cantidad:20},
        { id: 6, tipoCarga:"Sustancias corrosivas",cantidad:20},
        { id: 7, tipoCarga:"Sustancias y objetos peligrosos varios",cantidad:65},
        { id: 8, tipoCarga:"Material radiactivo",cantidad:63},
        { id: 9, tipoCarga:"Material radiactivo",cantidad:12},

    );

  //mostrar Todas Carga

  mostrarCarga(){

    return this.carga

  }

  //mostar Una Carga

  mostarUnaCarga(id: number): Carga{

    return this.carga.filter(carga => carga.id === id)[0];
  }



}
