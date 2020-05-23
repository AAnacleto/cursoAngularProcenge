import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputtexto',
  templateUrl: './inputtexto.component.html',
  styleUrls: ['./inputtexto.component.css']
})
export class InputtextoComponent implements OnInit {
 @Input('nome') nome: string = '';

 @Input('valorInicial') valorInicial: string = '';

 @Input('tipo') tipo: string= 'text';

 // tslint:disable-next-line: no-output-rename
 @Output('valorRetorno') valorRetorno: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  retonarValor(){
    this.valorRetorno.emit(this.valorInicial);

  }
}
