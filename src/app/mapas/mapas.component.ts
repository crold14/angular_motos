/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  mapa: google.maps.Map;
  @ViewChild('divMapa') divMapa: ElementRef;

  @Input() latini: string;
  @Input() latfin: string;
  @Input() longini: string;
  @Input() longfin: string;


  constructor() {
    this.latini = "";
    this.latfin = "";
    this.longini = "";
    this.longfin = "";
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadMap();
  }
  loadMap() {
    //carga del mapa
    //opciones de creacion del mapa
    const options = {
      center: new google.maps.LatLng(40.389793300, -3.765921300),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    //creamos el mapa
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options)
  }
}
