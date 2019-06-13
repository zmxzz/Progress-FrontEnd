import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
@Component({
    selector: 'app-check-nav',
    templateUrl: './check-nav.component.html',
    styleUrls: ['./check-nav.component.css']
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