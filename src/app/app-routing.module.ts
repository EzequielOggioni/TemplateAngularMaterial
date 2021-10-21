import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { UsandoMateriaComponent } from './componentes/usando-materia/usando-materia.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path:'' ,component: UsandoMateriaComponent},
  {path:'principal' ,component:CategoriasComponent},
  {path:'usuarios' ,component:UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
