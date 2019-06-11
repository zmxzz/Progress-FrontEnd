import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
    selector: 'app-info-panel',
    templateUrl: './info.panel.component.html',
    styleUrls: ['./info.panel.component.css']
})
export class InfoPanelComponent implements OnInit {
    constructor(private userService: UserService) {  }

    tasks: object;
    curr: string;

    ngOnInit() {
        this.userService.getTasks((res, err) => {
            if (err) {
                throw err;
            }
            else {
                this.tasks = res['tasks'];
            }
        });
    }

    assign(task: object): void {
        this.curr = task['_id'];
    }
}