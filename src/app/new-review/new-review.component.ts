import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  formulario: FormGroup
  rutaId: number

  constructor
    (
      private activatedRoute: ActivatedRoute,
      private reviewsService: ReviewsService,
      private router: Router
    ) {
    this.formulario = new FormGroup({
      title: new FormControl('', [
      ]),

      coment: new FormControl('', [
      ]),

      val: new FormControl('', [
      ]),
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.rutaId = params['rutaId']
    })
  }

  async onSubmit() {
    const response = await this.reviewsService.newReview(this.rutaId, this.formulario.value)
    console.log(this.formulario.value);
    console.log(response);


    alert('Review registrada')

    this.router.navigate(['/rutas'])

  }
  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}