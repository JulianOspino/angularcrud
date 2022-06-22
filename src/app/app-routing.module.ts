import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { ListarComponent } from './Componentes/listar/listar.component';

const routes: Routes = [
  {path: '', redirectTo:'listar', pathMatch:'full'},
  {path: 'listar', component:ListarComponent},
  {path: 'editar/:id', component:EditarComponent},
  {path: 'agregar', component:AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
