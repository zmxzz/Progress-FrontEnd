import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { callbackify } from 'util';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {};

    userToken: string = localStorage.getItem('token') === null ? '' : localStorage.getItem('token');
    serverAddr: string = 'http://localhost:3000'

    authenticate(username: string, password: string, callback): void {
        const headers = new HttpHeaders().set("Content-Type", "application/json");
        this.http.post(this.serverAddr + "/users/authenticate",
        {
            "username": username,
            "password": password
        }, { headers })
        .subscribe(
            res => {
                localStorage.setItem('token', res['token']);
                callback();
            },
            error => {
                console.log("Error: " + error);
            },
            () => {
                console.log("Complete");
            });
    }

    register(userInfo: any, callback): void {
        const headers = new HttpHeaders().set("Content-Type", "application/json");
        this.http.post(this.serverAddr + "/users/register",
        userInfo, { headers })
        .subscribe(
            res => {
                console.log(res);
                callback(res);
            });
    }

    isLoggedIn(callback: any) : void {
        const headers = new HttpHeaders({
            'Authorization': this.userToken
          });
        this.http.get(this.serverAddr + '/users/validate', { headers })
        .subscribe(
            res => {
                callback(true);
            },
            err => {
                callback(false);
            }
            );
    }

    getProfile(callback: any): void {
        const headers = new HttpHeaders({
            'Authorization': localStorage.getItem('token')
          });
          this.http.get(this.serverAddr + '/users/profile', { headers })
          .subscribe(
              res => {
                  callback(res, null);
              },
              err => {
                  callback(null, err);
              }
          );
    }

    getTasks(callback: any): void {
        const headers = new HttpHeaders({
            'Authorization': localStorage.getItem('token')
          });
          this.http.get(this.serverAddr + '/tasks', { headers })
          .subscribe (
              res => {
                  callback(res, null);
              },
              err => {
                  callback(null, err);
              }
          );
    }
    

}