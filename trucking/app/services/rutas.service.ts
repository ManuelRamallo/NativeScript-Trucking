import { Injectable } from '@angular/core';
import {Rutas} from '../models/Rutas';

@Injectable()
export class RutasService {

  constructor() { }


    private rutas = new Array<Rutas>(
        { id: 1, salida:"Sevilla",llegada:"Albacete", tiempo:220 ,urlImg: "Mercedes Benz" },
        { id: 2, salida:"Cadiz",llegada:"Huelva", tiempo: 100,urlImg: "Mercedes Benz" },
        { id: 3, salida:"Jáen",llegada:"Lleida", tiempo:350 ,urlImg: "Mercedes Benz" },
        { id: 4, salida:"Córdoba",llegada:"Murcia", tiempo:120 ,urlImg: "Mercedes Benz" },
        { id: 5, salida:"Sevilla",llegada:"Madrid", tiempo:300 ,urlImg: "Mercedes Benz" },
        { id: 6, salida:"Málaga",llegada:"Burgos", tiempo:280 ,urlImg: "Mercedes Benz" },
        { id: 7, salida:"Granada",llegada:"Madrid", tiempo:340,urlImg: "Mercedes Benz" },
        { id: 8, salida:"Sevilla",llegada:"Salamanca", tiempo:160 ,urlImg: "Mercedes Benz" },
        { id: 9, salida:"Sevilla",llegada:"Gijón", tiempo:420,urlImg: "Mercedes Benz" },

    );


  //Mostrar Todas las rutas

  mostrarRutas(){

    return this.rutas
  }

  //Mostrar Una Ruta

  mostrarUnaRuta(id: number): Rutas{


    return this.rutas.filter(rutas => rutas.id==id)[0]
  }




}
