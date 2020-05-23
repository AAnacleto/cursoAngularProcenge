import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { CorpoComponent } from './corpo/corpo.component';
import { from } from 'rxjs';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContaComponent } from './conta/conta.component';
import { InputtextoComponent } from './shared/inputtexto/inputtexto.component';
import { ButtonComponent } from './shared/button/button.component';
import { SelectComponent } from './shared/select/select.component';
import { ServicosService } from './shared/servicos.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CabecalhoComponent,
    BarralateralComponent,
    CorpoComponent,
    PessoaComponent,
    RodapeComponent,
    ContaComponent,
    InputtextoComponent,
    ButtonComponent,
    SelectComponent,
    ProdutoComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServicosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
