import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44349/api/"
  constructor(private http: HttpClient) { }

  login(loginModel : LoginModel){
    let newApi = this.apiUrl + "auth/login"
    return this.http.post<SingleResponseModel<TokenModel>>(newApi, loginModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
