import { Component } from '@angular/core';
import { UserService } from '../../service/user.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../login/login.component.css'],
    providers: [UserService]
})
export class RegisterComponent{
    constructor(private userService: UserService, private router: Router) { }
    
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;

    register() {
        const userInfo = {
            "email": this.email,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "username": this.username,
            "password": this.password
        }
        this.userService.register(userInfo, (res: Object) => {
            if (res['success']) {
                this.router.navigate(['/']);
            }
        });
    }

    cancel() {
        this.router.navigate(['/']);
    }

}