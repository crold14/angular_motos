import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from '../interfaces/rutas.interfaces';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-detalle-rutas',
  templateUrl: './detalle-rutas.component.html',
  styleUrls: ['./detalle-rutas.component.css']
})
export class DetalleRutasComponent implements OnInit {

  detalle: Ruta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rutasService: RutasService,
  ) {
    this.detalle = null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.detalle = await this.rutasService.getById(params['rutaId']);

      console.log(params);
    });
  }
}
