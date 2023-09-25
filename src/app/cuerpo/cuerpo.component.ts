import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Usuario }  from '../../app/usuario'


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent {
  seVe: boolean = true;
  

  usuarios: Usuario[] = [];
  nombre:string = 'Agustin';
  apellido:string = 'Fabbi';
  correo:string = 'Agussff@gmail.com';

  agregarUsuario() {
    let nuevoUsuario = new Usuario(this.nombre,this.apellido, this.correo)
    this.usuarios.push(nuevoUsuario);
    console.log(this.usuarios)
  }
  ocultarParrafo(){
    this.seVe = false;
  }
}

