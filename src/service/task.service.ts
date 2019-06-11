import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {};
    userToken: string = localStorage.getItem('token') === null ? '' : localStorage.getItem('token');
    serverAddr: string = 'http://localhost:3000'

    deleteTask(id: string, callback: any): void {
        const headers = new HttpHeaders({
            'Authorization': localStorage.getItem('token')
          });
    }

}