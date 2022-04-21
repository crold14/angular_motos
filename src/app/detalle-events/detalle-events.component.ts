import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-detalle-events',
  templateUrl: './detalle-events.component.html',
  styleUrls: ['./detalle-events.component.css']
})
export class DetalleEventsComponent implements OnInit {
  detalle: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService
  ) {
    this.detalle = null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {

      this.detalle = await this.eventsService.getById(params['eventId']);
      console.log(this.detalle);


    });
  }

}
