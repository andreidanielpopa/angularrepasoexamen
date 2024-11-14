import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '', component: AlumnosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil/:id', component: PerfilComponent
  },
  {
    path: 'create', component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
