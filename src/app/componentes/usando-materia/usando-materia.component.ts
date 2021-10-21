import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clase/usuario';
import { ApiHelperService } from 'src/app/helper/api-helper.service';
import { UsuarioHelperService } from 'src/app/helper/usuario-helper.service';

@Component({
  selector: 'app-usando-materia',
  templateUrl: './usando-materia.component.html',
  styleUrls: ['./usando-materia.component.css']
})
export class UsandoMateriaComponent implements OnInit {
  usuario: Usuario;
  nuevo: boolean;

  constructor(private ruteo: Router, private api: ApiHelperService, private userSer: UsuarioHelperService) {
    this.usuario = new Usuario();
    this.nuevo = false;
  }

  ngOnInit(): void { }

  loguear() {
    this.api.loguear(this.usuario).subscribe(then => { this.logueo(then); }, err => alert(err.Message));
  }

  logueo(resp: Usuario[]) {
    if (resp.length == 0) 
      alert("usuario invalido");
     else {
      this.userSer.setUsuario(resp[0]);
      this.ruteo.navigateByUrl('usuarios');
    }
  }

  registrar() {
    this.api.registrar(this.usuario).subscribe(then => { this.logueo(then); }, err => alert(err.Message));
  }
}
