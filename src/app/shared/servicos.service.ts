import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  data: any = [];
  constructor(private httpClient: HttpClient ) { }

  // getEstadosBr() {
  //    const resp = this.httpClient.get(this.url);
  //    resp.subscribe((data) => console.log(data));
  // }
  getEstadosBr() {
    return this.httpClient.get(this.url);
 }
}
