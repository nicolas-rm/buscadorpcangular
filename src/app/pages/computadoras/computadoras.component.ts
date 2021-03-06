import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { ComputadoraService } from '../../services/computadora.service';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styles: []
})
export class ComputadorasComponent implements OnInit {

  arregloComputadorasGuardadas = [];

  arregloVideo: any = [];
  desde = 0;
  computadora = {
    marca: '',
    modelo: '',
    precio: 0.0,
    color: '',
    almacenamiento: '',
    tipoAlmacenamineto: 'default',
    ram: '',
    velocidadCpu: '',
    marcaCpu: 'default',
    lectorCD: 'default', /* aqui */
    video: '', /* aqui */
    tajetaIntegrada: 'default', /* aqui */
    tajetaDedicada: 'default', /* aqui */
    modeloTarjetaVideo: '',
    tamanoPantalla: '',
    resolucion: '',
    ancho: '',
    alto: '',
    peso: '',
    sistemaOperativo: 'default',
    usb2: '',
    usb3: '',
    expansionRam: 'default', /* aqui */
    img: ''
  };

// tslint:disable-next-line: variable-name
  constructor(private _computadoraService: ComputadoraService) { }
 
  ngOnInit() {
    this.arregloVideo = [];
  }

  agregarVideo(event) {
    if (event.target.checked) {
      this.arregloVideo.push(event.target.id.toString());
    } else {
      for (let i = 0; i < this.arregloVideo.length; i++) {
        if (this.arregloVideo[i] === event.target.id.toString()) {
          this.arregloVideo.splice(i, 1);
          // this.arregloVideo.;|
        }
      }
    }


    this.computadora.video = this.arregloVideo.toString();
    console.log(this.arregloVideo);
    console.log(this.computadora.video);
  }

// tslint:disable-next-line: jsdoc-format
  /**una forma de validacion para la captura de datos o por si algo es invalido */
  agregarPc(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.computadora);

// tslint:disable-next-line: jsdoc-format
    /**manda a llamar al metodo para guardar la computadora */
    this._computadoraService.registrarComputadora(this.computadora).subscribe((resp: any) => {
      console.log('se guardo exitosamente: computadoras.components.ts');
    });

    /*mensja o notificacion estilo retro */
    /* swal.fire({
      title: '¿Cargar computadora?',
      text: "Aquí van los datos ordenados de la computadora",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, ¡Agrégala!'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          '¡Agregada!',
          'La computadora ha sido guardada correctamente',
          'success'
        )
      }
    })
 */
    /*retro */
  }


  // Cargar todas las computadoras
  /* this._computadoraService.cargarComputadoras(this.desde).subscribe(
      (resp: any) => {
        this.arregloComputadorasGuardadas = resp;
        console.log(this.arregloComputadorasGuardadas);
        console.log(resp.computadoras[0].video);
      }
    ) */

}
