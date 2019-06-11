import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
    selector: 'app-check-nav',
    templateUrl: './check_nav.component.html',
    styleUrls: ['./check_nav.component.css']
})
export class CheckNavComponent implements OnInit { 
    username: string;

    constructor(private userService: UserService) {  };

    
    ngOnInit() {
        this.userService.getProfile((res, err) => {
            if (err) {
                console.log(err);
                throw err;
            }
            else {
                this.username = res.user.username;
            }
        })
    }

 }