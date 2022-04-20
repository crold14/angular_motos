import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RutasComponent } from './rutas/rutas.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { DetalleRutasComponent } from './detalle-rutas/detalle-rutas.component';
import { MapasComponent } from './mapas/mapas.component';
import { NewRouteFormularioComponent } from './new-route-formulario/new-route-formulario.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutasComponent,
    LoginComponent,
    RegistroComponent,
    DetalleRutasComponent,
    MapasComponent,
    NewRouteFormularioComponent,
    EditarPerfilComponent,
    ReviewsComponent,
    PerfilComponent,
    ChangePasswordComponent,
    NewReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
