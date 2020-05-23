export class Pessoa{
  codigo: string = ' ';
  nome: string= ' ';
  telefone: string= ' ';
  datanasc: string=' ';
  endereco: string =' ';
  bairro: string = ' ';
  cidade: string = ' ';
  estado: string = ' ';

  constructor(
    codigo?: string,
    nome?: string,
    telefone?: string,
    datanasc?: string,
    endereco?: string,
    bairro?: string,
    cidade?: string,
    estado?: string,
  ){
    this.codigo = codigo;
    this.nome = nome;
    this.telefone = telefone;
    this.datanasc = datanasc;
    this.endereco = endereco;
    this.bairro = bairro;
    this.cidade  = cidade;
    this.estado = estado;
  }
}
