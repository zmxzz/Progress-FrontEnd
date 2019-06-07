import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    template: ''
})
export class IndexComponent implements OnInit {
    constructor(private userService: UserService, private router: Router){ }
    
    ngOnInit() {
        this.userService.isLoggedIn((res) => {
            if (res) {
                this.router.navigate(['/profile']);
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
}