import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { ComputadoraService } from '../../services/computadora.service';

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
    tipoAlmacenamineto: '',
    ram: '',
    velocidadCpu: '',
    marcaCpu: '',
    lectorCD: false, /* aqui */
    video: '', /* aqui */
    tajetaIntegrada: false, /* aqui */
    tajetaDedicada: false, /* aqui */
    modeloTarjetaVideo: '',
    tamañoPantalla: '',
    resolucion: '',
    ancho: '',
    alto: '',
    peso: '',
    sistemaOperativo: '',
    usb2: '',
    usb3: '',
    expansionRam: false, /* aqui */
    img: ''
  };

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
          this.arregloVideo.splice(i, i);
        }
      }
    }


    this.computadora.video = this.arregloVideo.toString();
    console.log(this.arregloVideo);
    console.log(this.computadora.video);
  }

  /**una forma de validacion para la captura de datos o por si algo es invalido */
  agregarPc(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.computadora);

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
