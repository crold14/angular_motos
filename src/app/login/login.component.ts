import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private rutasService: RutasService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.rutasService.loginUser(this.formulario.value)

    console.log(response);

    if (response.error) {
      alert('Login incorrecto')
      this.router.navigate(['/login'])
    } else {
      alert('Login correcto')
      this.router.navigate(['/rutas'])
    }




  }

}
