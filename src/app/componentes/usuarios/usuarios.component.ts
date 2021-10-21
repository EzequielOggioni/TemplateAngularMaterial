import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/Clase/mensaje';
import { Usuario } from 'src/app/Clase/usuario';
import { ApiHelperService } from 'src/app/helper/api-helper.service';
import { UsuarioHelperService } from 'src/app/helper/usuario-helper.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarioActual!:Usuario;
  public usuarios!:Usuario[];
  public mensajes:Mensaje[];
  public mensaje!:string;
  nuevo:boolean;
  setearUsuario(usuarioSeleccionada:Usuario){
    this.usuarioActual = usuarioSeleccionada;
    this.api.TraerMensajes( this.userSer.getUsuario().id,  this.userSer.getUsuario().token,usuarioSeleccionada.id).subscribe(then => this.mensajes = then);
  }
  
  constructor(private api:ApiHelperService, private userSer: UsuarioHelperService) {
    this.nuevo  = false;
     this.api.traerUsuarios( this.userSer.getUsuario().id,  this.userSer.getUsuario().token).subscribe( then => this.usuarios  = then);
    this.mensajes= [];
  }

  ngOnInit(): void {
  }
  agregarNuevo(){
    this.nuevo = true;
  }
  enviar(){
    this.api.Enviarmensaje(this.mensaje, this.usuarioActual.id,this.userSer.getUsuario().id,  this.userSer.getUsuario().token )
    .subscribe(then=> this.setearUsuario(this.usuarioActual));
    this.nuevo =false;
  }
}
