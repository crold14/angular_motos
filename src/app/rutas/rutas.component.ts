import { Component, OnInit } from '@angular/core';
import { Ruta } from '../interfaces/rutas.interfaces';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  arrRutas: Ruta[]
  constructor(
    private rutasService: RutasService
  ) {
    this.arrRutas = []
  }

  async ngOnInit() {
    const response = await this.rutasService.getALL()
    this.arrRutas = response;




  }

}
