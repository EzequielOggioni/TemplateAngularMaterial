import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Clase/mensaje';
import { Producto } from 'src/app/Clase/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() productos!:Mensaje[]
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
