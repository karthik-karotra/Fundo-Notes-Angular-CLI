import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postHttpService(data, url: string) {
     let options=
           {
           headers:new HttpHeaders
           ({
             'Authorization':'Bearer'+ localStorage.getItem('id'),
             'Content-Type':'application/json'
           })
         }
    return this.http.post(url, data,options);
  }
}
