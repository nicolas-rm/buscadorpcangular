import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ComputadoraService } from '../../services/computadora.service';

@Component({
  selector: 'app-buscadorpc',
  templateUrl: './buscadorpc.component.html',
  styles: []
})
export class BuscadorpcComponent implements OnInit {
  // tslint:disable-next-line: jsdoc-format
  /**variables que utilizare para captar todo lo que se marque */

  formulario = true;
  computadoras: any = [];

  clickMessage: string;
  arregloOcupacion: any = [];
  arregloMarcaPreferencia: any = [];
  desde = 0;
  preferencias = {
    ocupacion: '',
    horas: 0,
    presupuesto: 0,
    edad: 0,
    nivelUso: '',
    marcaPreferencia: '',
    color: '',
    almacenamiento: ''
  }

  /** */
  // tslint:disable-next-line: jsdoc-format
  /** buscar la forma en que se marquen varios y guardarlos*/

  // tslint:disable-next-line: variable-name
  constructor(private _computadoraService: ComputadoraService) { }

  ngOnInit() {
    this.arregloOcupacion = [];
    this.arregloMarcaPreferencia = [];
  }

  sugerirPc(/*todos los argumentos con los que voy a validar */) {
    // tslint:disable-next-line: jsdoc-format
    /**referencia al donde mandare los parametros */
    /* this._computadoraService.cargarConAlgoritmo() */

    this._computadoraService.cargarConAlgoritmo(this.preferencias,this.desde).subscribe((resp: any) => {
      this.computadoras = resp;
      console.log(this.computadoras);
    });

    if (this.formulario) {
      this.formulario = false;
    } else{
      this.formulario = true;
    }

  }

  agregarOcupacion(event) {

    console.log(event);
    if (event.target.checked) {
      this.arregloOcupacion.push(event.target.id.toString());
    } else {
      for (let i = 0; i < this.arregloOcupacion.length; i++) {
        if (this.arregloOcupacion[i] === event.target.id.toString()) {
          this.arregloOcupacion.splice(i, 1);
        }
      }
    }

    // console.log(this.arregloOcupacion);
    this.preferencias.ocupacion = this.arregloOcupacion.toString();
    // console.log(this.preferencias.ocupacion);
    // console.log(this.preferencias.presupuesto);
    // console.log(this.preferencias.horas);
  }

  agregarMarcaPreferencia(event) {
    
    if (event.target.checked) {
      this.arregloMarcaPreferencia.push(event.target.id.toString());
    } else {
      for (let i = 0; i < this.arregloMarcaPreferencia.length; i++) {
        if (this.arregloMarcaPreferencia[i].toString === event.target.id.toString()) {
          this.arregloMarcaPreferencia.splice(i, i);
          // this.arregloVideo.;
        }
      }
    }
    this.preferencias.marcaPreferencia = this.arregloMarcaPreferencia.toString();
    // console.log(this.preferencias.marcaPreferencia);
    // console.log(this.preferencias.color);
  }

  agregarHora(event) {

    if (event.target.checked) {
      this.preferencias.horas = event.target.id.toString();
    }
    // console.log(this.preferencias.horas);
  }
  agregarUso(event) {

    if (event.target.checked) {
      this.preferencias.nivelUso = event.target.id.toString();
    }
    // console.log(this.preferencias.nivelUso);
  }

  
  onclick() {
    this.clickMessage = 'You are my hero!';
    // console.log(this.clickMessage);
    // console.log(this.preferencias.edad);
    // console.log(this.preferencias.horas);
    console.log(this.preferencias);
  }
}
