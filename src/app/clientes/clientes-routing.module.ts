import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent} from './cliente/cliente.component';
import { ListadoClientesComponent} from './listado-clientes/listado-clientes.component';



const routes: Routes = [
  
  {path: 'nuevo', component: ClienteComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }