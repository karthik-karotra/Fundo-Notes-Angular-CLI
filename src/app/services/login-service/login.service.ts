import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from './../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) { }

  getUserLoggedIn(data) {
    return this.http.postHttpService(data, this.baseUrl);
  }
}
