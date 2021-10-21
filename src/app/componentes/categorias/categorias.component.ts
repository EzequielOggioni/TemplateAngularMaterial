import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Clase/categoria';
import { Producto } from 'src/app/Clase/producto';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public categoriaActual!:Categoria;
  public categorias!:Categoria[];
  setearCategoria(categoriaSeleccionada:Categoria){
    this.categoriaActual = categoriaSeleccionada;
  }
  constructor() {
    

    let productos = new Array<Producto>();
    productos.push({descripcion: " Cuadro: Acero alivianado" +
    " Sistema de cambios: SAIGUAN de 18 velocidades" +
    " Pata de cambio SAIGUAN" +
    " Piñón: 6 velocidades" +
    " Plato/Palanca: SAIGUAN 42-34-24" +
    " Frenos: Balancin trasero y delantero" +
    " Caja de dirección integrada" +
    " Caño de asiento: con collar de cierre" +
    " Asiento: MTB" +
    " Puños: de goma",nombre:"Bicicleta",path:"https://http2.mlstatic.com/D_NQ_NP_662275-MLA45336241212_032021-O.webp"});
    
    productos.push({descripcion: " Cuadro: Acero alivianado" +
    " Cambios index. 21 velocidades.Cadena 1/2 * 3/32 Index. Shifters Tipo RapidFire. LLantas de aluminio. Rayos, llantas y mazas color negro. Juego de direcciónes NECO H831."
    +" Puños: de goma",nombre:"Bicicleta Futura R26 TECHNO",path:"https://www.cetrogar.com.ar/media/catalog/product/r/o/ro2086.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"});
    
    productos.push(productos[0]);
    productos.push(productos[1]);
    productos.push(productos[0]);
    productos.push(productos[1]);

    this.categorias= [{nombre:"Biciclta",productos:productos}, {nombre:"otro",productos:[]}];
   }

  ngOnInit(): void {
  }

}
