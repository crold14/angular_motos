import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private userService: UsersService,
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
    const response = await this.userService.registerUser(this.formulario.value)
    console.log(this.formulario.value);
    alert('Perfil actualizado')

    this.router.navigate(['/rutas'])

  }

  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}
