import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item/item';
import {Rutas} from '../models/Rutas';
import {RutasService} from '../services/rutas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent implements OnInit {

  @Input() ruta:Rutas;

  constructor(private rutaService:RutasService,private route:ActivatedRoute
  ) { }

  ngOnInit() {

      const id = +this.route.snapshot.params["id"];
      this.ruta = this.rutaService.mostrarUnaRuta(id);

  }

}
