import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {AppSettings} from "../AppSettings";

const AUTH_API = AppSettings.API_ENDPOINT + 'auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  withCredentials: true,
  observe: 'response' as 'response'};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(AUTH_API + 'users');
  }

  // deleteUser(username: string): Observable<any> {
  //   return this.http.delete(AUTH_API + 'users/${username}');
  // }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${AUTH_API}users/${username}`, httpOptions);
  }
  

}
