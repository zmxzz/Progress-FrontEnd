import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {};
    userToken: string = localStorage.getItem('token') === null ? '' : localStorage.getItem('token');
    serverAddr: string = 'http://localhost:3000'

    deleteTask(id: string, callback): void {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          });
        const body = {
            _id: id
        };
        const options = {
            headers: headers,
            body: body
        };
        this.http.delete(this.serverAddr + '/tasks', options)
        .subscribe(
            res => {
                callback(res, null);
            },
            err => {
                callback(null, err);
            }
        );   
    }

    addTask(taskInfo: object, callback): void {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          });
          this.http.post(this.serverAddr + "/tasks/add",
          taskInfo, { headers })
          .subscribe(
              res => {
                  callback(res, null);
              },
              err => {
                  callback(null, err);
              });
    }

    updateTask(taskInfo: object, callback): void {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          });
        this.http.post(this.serverAddr + "/tasks/commit",
        taskInfo, {headers})
        .subscribe(
            res => {
                callback(res, null);
            },
            err => {
                callback(null, err);
            }
        );
    }

}