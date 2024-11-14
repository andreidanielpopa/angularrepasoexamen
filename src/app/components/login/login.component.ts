import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/servicealumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('cajausuario') cajaUsuario!: ElementRef;
  @ViewChild('cajacontrasenya') cajaContrasenya!: ElementRef;

  constructor(
    private _service: ServiceAlumnos,
    private _router: Router
  ) { }

  logIn(): void {
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaContrasenya.nativeElement.value;

    this._service.getToken(userName, password).subscribe(response => {
      this._service.token = response.response;
      console.log(response.response)
      this._router.navigate(['/'])
    });
  }

}
