import {Component, Input, OnInit} from '@angular/core';
import {Carga} from '../models/Carga';
import {cargaService} from '../services/carga.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.scss']
})
export class CargasComponent implements OnInit {

  @Input() carga: Carga;

  constructor(private cargaService:cargaService, private route: ActivatedRoute) { }

  ngOnInit() {

      const id = +this.route.snapshot.params["id"];
      this.carga = this.cargaService.mostarUnaCarga(id);


  }

}
