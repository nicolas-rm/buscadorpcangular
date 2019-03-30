import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ComputadoraService } from '../../services/computadora.service';

@Component({
  selector: 'app-buscadorpc',
  templateUrl: './buscadorpc.component.html',
  styles: []
})
export class BuscadorpcComponent implements OnInit {
  /**variables que utilizare para captar todo lo que se marque */
  desde = 0;
  presupuesto = 0;
  edad = 0;
  horas = 0;
  ocupacion = '';
  /** */
  /** buscar la forma en que se marquen varios y guardarlos*/

  constructor(private _computadoraService: ComputadoraService) { }

  ngOnInit() {
  }

  sugerirPc(/*todos los argumentos con los que voy a validar */) {
    /**referencia al donde mandare los parametros */
    /* this._computadoraService.cargarConAlgoritmo() */
  }

}
