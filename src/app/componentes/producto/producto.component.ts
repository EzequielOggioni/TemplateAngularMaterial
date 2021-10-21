import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Clase/mensaje';
import { Producto } from 'src/app/Clase/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }
 
  @Input() producto!:Mensaje;

  ngOnInit(): void {
   
  }

  AgregarCarrito(){
    let carrito :Mensaje[]= localStorage.getItem("carrito")?JSON.parse(localStorage.getItem("carrito")??""):[];
    carrito.push(this.producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    console.log(carrito);
  }

}
