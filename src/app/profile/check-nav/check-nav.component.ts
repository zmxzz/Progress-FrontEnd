import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-check-nav',
    templateUrl: './check-nav.component.html',
    styleUrls: ['./check-nav.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CheckNavComponent implements OnInit { 
    username: string;
    show: boolean = false;

    constructor(private userService: UserService, private router: Router) {  };
    
    ngOnInit() {
        this.userService.getProfile((res, err) => {
            if (err) {
                console.log(err);
                this.router.navigate(['/login']);
                throw err;
            }
            else {
                this.username = res.user.username;
            }
        })
    }

    flip() {
        this.show = !this.show;
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

 }