import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule} from './clientes-routing.module';
import { ClienteComponent} from './cliente/cliente.component';
import { ClientesComponent } from './clientes.component';
import { ListadoClientesComponent} from './listado-clientes/listado-clientes.component';

//Imports de NgZorro
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzMessageModule} from 'ng-zorro-antd/message';
import { NzSelectModule} from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule,
    NzSelectModule
  ],
  declarations: [ClientesComponent, ClienteComponent, ListadoClientesComponent]
})
export class ClientesModule { }
