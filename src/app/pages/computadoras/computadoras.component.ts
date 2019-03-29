import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styles: []
})
export class ComputadorasComponent implements OnInit {


  computadora = {
    marca: '',
    modelo: '',
    precio: '',
    color: '',
    almacenamiento: '',
    tipoAlmacenamineto: '',
    ram: '',
    velocidadCpu: '',
    marcaCpu: '',
    lectorCD: false, /* aqui */
    video: '',/* aqui */
    tajetaIntegrada: false,/* aqui */
    tajetaDedicada: false,/* aqui */
    modeloTarjetaVideo: '',
    tamañoPantalla: '',
    resolucion: '',
    ancho: '',
    alto: '',
    peso: '',
    sistemaOperativo: '',
    usb2: '',
    usb3: '',
    expansionRam: false,/* aqui */
    img: ''
  }

  constructor() { }

  ngOnInit() {
  }

  agregarVideo(event) {
    console.log(event);
    /* this.computadora.video += event + ','; */
    /* console.log(this.computadora.video); */
  }

  agregarPc(form: NgForm) {
    console.log(this.computadora);
  }

}
