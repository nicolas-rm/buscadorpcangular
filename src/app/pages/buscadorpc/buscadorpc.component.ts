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
  desde = 0;
  presupuesto = 0;
  edad = 0;
  horas = 0;
  ocupacion = '';
  clickMessage: string;
  /** */
// tslint:disable-next-line: jsdoc-format
  /** buscar la forma en que se marquen varios y guardarlos*/

// tslint:disable-next-line: variable-name
  constructor(private _computadoraService: ComputadoraService) { }

  ngOnInit() {
  }

  sugerirPc(/*todos los argumentos con los que voy a validar */) {
// tslint:disable-next-line: jsdoc-format
    /**referencia al donde mandare los parametros */
    /* this._computadoraService.cargarConAlgoritmo() */
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log(this.clickMessage);
  }
}
