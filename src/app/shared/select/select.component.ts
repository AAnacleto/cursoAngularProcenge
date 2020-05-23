import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public estados: any = [];

  // tslint:disable-next-line: no-input-rename
  @Input('valorInicial') valorInicial: string = '';

  @Input('nome') nome: string='';

  // tslint:disable-next-line: no-input-rename
  @Input('opcoes') opcoes: any = [];

  // tslint:disable-next-line: no-output-rename
  @Output('valorRetorno') valorRetorno: EventEmitter<string> = new EventEmitter();

  constructor( private services: ServicosService) { }

  ngOnInit(): void {

  }

 retornarValor(){
   this.valorRetorno.emit(this.valorInicial);
 }

}
