import { Component, OnInit } from '@angular/core';
import { Pessoa } from './Pessoa.class';
import { ServicosService } from '../shared/servicos.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

   titulo: string = 'Lista de Cadastrados';
   nome: string = 'Allysson';

   pessoa: Pessoa = new Pessoa();


   listapessoa: any = [];

   listaEstado: any = [];


   listaPessoas: Pessoa[] = [
     {
      codigo: '1',
      nome: 'Felipe ',
      telefone: '88888 ',
      datanasc: '06/12/2006',
      endereco: 'rua',
      bairro: 'amaro branco',
      cidade: 'Olinda',
      estado: 'PE'
     },
     {
      codigo: '2',
      nome: 'Alberto ',
      telefone: '9999 ',
      datanasc: '07/12/2006',
      endereco: 'rua',
      bairro: 'amaro branco',
      cidade: 'Olinda',
      estado: 'PE'
     }
   ];



   codigo: string;
   telefone: string;
   datanascimento: string;
   endereco: string;
   cidade: string;
   estado: string;
   bairro: string;

   mostrarcadastro: boolean = false;
   cadastro:boolean = false;
   alteracao:boolean = false;

   constructor(private services: ServicosService) { }

  ngOnInit(): void {
    this.listaEstado = this.services.getEstadosBr()
    .subscribe
    (
      data =>
      {
        this.listaEstado = data;
      }
    );

  }

  ola(){
  alert( `${this.nome }
          ${this.codigo }
          ${this.telefone }
          ${this.datanascimento}
          ${this.bairro}
          ${this.estado}
          ${this.cidade }
          ${this.estado}`
          );

}


mostrarCadastroPessoa(){
  this.mostrarcadastro = !this.mostrarcadastro;
}


salvar(){
  console.log(this.pessoa);
  this.listaPessoas.push(this.pessoa);
  this.pessoa = new Pessoa();
}



alterar(i){
  this.pessoa = i;
  console.log(i);
  this.alteracao = true;
  this.cadastro = false;
}

excluir(i){
  this.listaPessoas = this.listaPessoas.filter(
    obj => obj !== i
  );


  console.log(i);
}

excluirSplice(i){
   const x = this.listaPessoas.indexOf(i);
   console.log(x);
   this.listaPessoas.splice(x, 1);
}

salvarAlteracao(){
  this.pessoa = new Pessoa();
  this.alteracao = false;
}

}

