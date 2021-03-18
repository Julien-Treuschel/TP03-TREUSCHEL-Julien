import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) {
    this.datas = new Array<string>();
  }
  
  cpt : number = 0;
  datas : string [];
  log (data) {
    this.datas.push (data);
    this.cpt++;
    console.log (this.cpt + "" +this.datas );
  }

  public getCatalogue () : Observable<any> {
    return this.http.get<any> (environment.baseUrl);
  } 
}
