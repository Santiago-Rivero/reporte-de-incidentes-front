import { ApiService } from './../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NzMessageService} from 'ng-zorro-antd/message';

@Component({
  //selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  formulario: FormGroup;
  private cliente: any = null;


  constructor(
    private builder: FormBuilder,
    private api: ApiService,
    private mensajeService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();

  }

  private inicializarFormulario(){
    this.formulario = this.builder.group({
      razon_social:              [null, Validators.required],
      cuit:                      [null, Validators.required],
    });
  }

}
