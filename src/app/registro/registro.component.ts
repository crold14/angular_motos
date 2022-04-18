import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



  formulario: FormGroup;

  constructor(

    private usersService: UsersService,
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
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/),
      ]),
      img: new FormControl('', [
        // Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),


    })


  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usersService.registerUser(this.formulario.value)
    console.log(this.formulario.value);
    alert('Registro completo')

    this.router.navigate(['/login'])

  }



  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}




