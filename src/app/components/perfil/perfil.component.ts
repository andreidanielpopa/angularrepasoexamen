import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceAlumnos } from '../../services/servicealumnos';
import { Alumno } from '../../models/alumnos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  public alumno!:Alumno;

  constructor(
    private _service: ServiceAlumnos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    } else {
      this._activeRoute.params.subscribe((params: Params) => {
        let id = parseInt(params['id']);
        this._service.getAlumnosById(id).subscribe(response => {
          console.log(response);
          this.alumno = response;
        })
      })
    }
  }

}
