import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';



@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {



  constructor(
    private reviewsService: ReviewsService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

}
