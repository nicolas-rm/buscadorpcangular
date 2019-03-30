import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import swal from'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputadoraService {

  URL_SERVICIOS = 'http://localhost:3000';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) { }

// ==============================================================
// Cargar computadoras - GET
// ==============================================================
cargarComputadoras(desde = 0) {
  const url = this.URL_SERVICIOS + '/computadora?desde=' + desde;
  return this._http.get(url, {headers: this.headers});
}


// ==============================================================
// Cargar computadoras - GET
// ==============================================================
cargarConAlgoritmo(desde = 0, presupuesto, edad, horas, ocupacion) {
  /*aqui mando a llamar a la ruta del backend server*/

  // http://localhost:3000/computadora/sugerencia?desde=0&presupuesto=15252.2&edad=15&horas=12&ocupacion=estudiante, desarrollador, diseñador
  
}

// ==============================================================
// Registrar computadora - POST
// ==============================================================
registrarComputadora(computadora) {
  const url = this.URL_SERVICIOS + '/computadora';
  return this._http.post(url, computadora, {headers: this.headers}).pipe(
    map( (resp: any) => {
      console.log(resp);
      swal.fire('Computadora registrada', 'Computadora registrada correctamente','success');
      return true;
    }),
    catchError( err => {
      swal.fire('Error' + err.status, err.error.mensaje, 'error');
      return throwError(err);
    })
  )
}

}
