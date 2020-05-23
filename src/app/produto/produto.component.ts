import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto.class';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  mostrarcadastroproduto: boolean= false;

  titulo: string ='Lista de Produtos';

  produto: Produto = new Produto();

  cadastro:boolean = false;
  alteracao:boolean = false;

  ListaProduto: Produto[] = [
    {
      codigo: '1',
      nome: 'Geladeira',
      descricao: 'Geladeira Fost free',
      lote: 'AAA',
      valorcusto: 2000,
      valorvenda: 700,
      datavalidade: '06/05/2020',
      tipo: 'eletrodomestico'
    },
    {
      codigo: '2',
      nome: 'Notebook',
      descricao: 'i5 processador',
      lote: 'AAA',
      valorcusto: 2000,
      valorvenda: 700,
      datavalidade: '06/05/2020',
      tipo: 'eletrônico'
    }
  ];

  TipoProdutos: any = [
    {
      codigo: '1',
      nome: 'Eletrodoméstico'
    },
    {
      codigo: '2',
      nome: 'Alimenticio'
    },
    {
      codigo: '3',
      nome: 'Construção'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCadastroproduto(){
    this.mostrarcadastroproduto = !this.mostrarcadastroproduto;
  }
  salvar(){
    console.log(this.produto);
    this.ListaProduto.push(this.produto);
    this.produto = new Produto();
  }

  alterar(i){
    this.produto = i;
    console.log(i);
    this.alteracao = true;
    this.cadastro = false;
  }
  excluirSplice(i){
    const x = this.ListaProduto.indexOf(i);
    console.log(x);
    this.ListaProduto.splice(x, 1);
 }

 salvarAlteracao(){
   this.produto = new Produto();
   this.alteracao = false;
 }

}
