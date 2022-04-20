import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetalleRutasComponent } from './detalle-rutas/detalle-rutas.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewRouteFormularioComponent } from './new-route-formulario/new-route-formulario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RutasComponent } from './rutas/rutas.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'rutas/new', component: NewRouteFormularioComponent },
  { path: 'rutas/:rutaId', component: DetalleRutasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'cambiaContraseña', component: ChangePasswordComponent },
  { path: 'rutas/:rutaId/newReview', component: NewReviewComponent },


  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
