import {Component, Input, OnInit} from '@angular/core';
import {Camiones} from '../models/Camiones';
import {CamionesService} from '../services/camiones.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.scss']
})
export class CamionesComponent implements OnInit {

  @Input() camion:Camiones;

  constructor(private camionesservice:CamionesService, private route: ActivatedRoute) { }

  ngOnInit() {

      const id = +this.route.snapshot.params["id"];
      this.camion = this.camionesservice.mostrarUnCamion(id);

  }

}
