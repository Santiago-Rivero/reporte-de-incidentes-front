import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBack: string = environment.url_back;

  constructor(private http: HttpClient) { }

  public clienteSegun(razonSocial: string, cuit: any) {
    const params = new HttpParams()
      .set('razon_social', razonSocial)
      .set('cuit', cuit);
    return this.http.get(this.urlBack + 'clientes', {params});
  }

  public serviciosContratados(clienteId: number) {
    return this.http.get(this.urlBack + 'clientes/' + clienteId + '/servicios-contratados');
  }

  public tiposDeProblema() {
    return this.http.get(this.urlBack + 'tipos-de-problemas');
  }

  public problemasPosibles(tipoDeProblemaId: number) {
    return this.http.get(this.urlBack + 'tipos-de-problemas/' + tipoDeProblemaId + '/posibles-problemas');
  }

  public tecnicosQueResuelvan(tipoDeProblemaId: number|string) {
    const params = new HttpParams()
      .set('tipo_problema_id', tipoDeProblemaId.toString());
    return this.http.get(this.urlBack + 'tecnicos', {params});
  }

  public listarIncidentes() {
    return this.http.get(this.urlBack + 'incidentes');
  }

  public guardarIncidente(incidente: any) {
    return this.http.post(this.urlBack + 'incidentes', incidente);
  }
}
