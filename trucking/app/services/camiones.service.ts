import { Injectable } from '@angular/core';
import {Camiones} from '../models/Camiones';

@Injectable()
export class CamionesService {



  constructor() { }


  //Lista de camiones
    private camiones = new Array<Camiones>(
        { id: 1, altura:2.12, peso:3.2, marca: "Mercedes Benz" },
        { id: 2, altura:2.42, peso:3.42, marca: "BMW" },
        { id: 3, altura:2.62, peso:3.52, marca: "Seat" },
        { id: 4, altura:2.82, peso:3.72, marca: "KIA" },
        { id: 5, altura:2.72, peso:3.28, marca: "POWER" },
        { id: 6, altura:2.12, peso:3.21, marca: "Peugeot" },
        { id: 7, altura:2.22, peso:3.22, marca: "Fiat" },
        { id: 8, altura:2.43, peso:3.23, marca: "Volvo" },
        { id: 9, altura:2.95, peso:3.32, marca: "Naranja" },

    );

  //Mostrar Todos los camiones

  mostrarCamiones(): Camiones[]{

    return this.camiones
  }

  //Mostrar Un Camion

  mostrarUnCamion( id: number) : Camiones{


      return this.camiones.filter(camiones => camiones.id === id)[0];

  }

  //Agregar Camion

  agregarCamion(){

  }

  //Elminiar Camion

  eliminarCamion(){

  }








}
