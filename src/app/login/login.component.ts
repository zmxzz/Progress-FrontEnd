import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    username: string = "";
    password: string = "";

    public register() {
        console.log(this.username);
        console.log(this.password);
    }

    public login() {
        console.log(this.username);
        console.log(this.password);
    }
    
}