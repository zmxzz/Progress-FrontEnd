import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    constructor(private userService: UserService, private router: Router) { }

    public register() {
        this.router.navigate(['/register']);
    }

    public login(): void {
        this.userService.authenticate(this.username, this.password, () => {
            this.router.navigate(['/profile']);
        });
    }
    
}