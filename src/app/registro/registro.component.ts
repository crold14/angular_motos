import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



  formulario: FormGroup;

  constructor(
    private rutasService: RutasService,
    private router: Router
  ) {


    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      nickname: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      age: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      img: new FormControl('', [
        // Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      repite_password: new FormControl('', [
        Validators.required,
      ]),

    })


  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.rutasService.loginUser(this.formulario.value)
    console.log(this.formulario.value);

    this.router.navigate(['/login'])

  }


  // checkError(fieldName: string, errorType: string) {
  //   return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  // }

}




