import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ServiceAlumnos } from '../../services/servicealumnos';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumnos';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidos!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaactivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidcurso') cajaIdCurso!: ElementRef;

  constructor(
    private _service: ServiceAlumnos,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/login"]);
    }
  }

  createAlumno(): void {
    let nombre = this.cajaNombre.nativeElement.value;
    let apellidos = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = parseInt(this.cajaActivo.nativeElement.value);
    let idcurso = parseInt(this.cajaIdCurso.nativeElement.value);

    let alumno = new Alumno(0, nombre, apellidos, imagen, activo, idcurso);

    this._service.createAlumno(alumno).subscribe(response => {
      this._router.navigate(['/']);
    })
  }

}
