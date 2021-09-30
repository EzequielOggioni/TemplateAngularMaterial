import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsandoMateriaComponent } from './componentes/usando-materia/usando-materia.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    UsandoMateriaComponent,
    ProductoComponent,
    ListaComponent,
    CategoriasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
