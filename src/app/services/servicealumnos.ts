import { Alumno } from './../models/alumnos';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()

export class ServiceAlumnos {
    public token: string;

    constructor(private _http: HttpClient) {
        this.token = "";
    }

    getToken(userName: string, password: string): Observable<any> {
        let json = { userName, password };
        let header = new HttpHeaders();
        header = header.set('Content-type', 'application/json');

        let request = 'api/auth/login';
        let url = environment.urlApiAlumnos + request;

        return this._http.post(url, json, { headers: header });
    }

    getAlumnos(): Observable<any> {

        let header = new HttpHeaders().set("Authorization", "bearer " + this.token);

        let request = 'api/Alumnos/FiltrarCurso/2024';
        let url = environment.urlApiAlumnos + request;

        return this._http.get(url, { headers: header });
    }

    getAlumnosById(idAlumno: number): Observable<any> {

        let header = new HttpHeaders().set("Authorization", "bearer " + this.token);

        let request = 'api/Alumnos/FindAlumnoToken/' + idAlumno;
        let url = environment.urlApiAlumnos + request;

        return this._http.get(url, { headers: header });
    }

    createAlumno(alumno: Alumno): Observable<any> {
        let json = JSON.stringify(alumno);
        let header = new HttpHeaders().set('Content-type', 'application/json').set("Authorization", "bearer " + this.token);

        let request = 'api/Alumnos/InsertAlumnoToken';
        let url = environment.urlApiAlumnos + request;

        return this._http.post(url, json, { headers: header });
    }

}
