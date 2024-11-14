import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAlumnos } from '../../services/servicealumnos';
import { Alumno } from '../../models/alumnos';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {

  public alumnos!: Array<Alumno>;

  constructor(
    private _service: ServiceAlumnos,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    } else {
      this._service.getAlumnos().subscribe(response => {
        console.log(response);
        this.alumnos = response;
      })
    }

  }
}
