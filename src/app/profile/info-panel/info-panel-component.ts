import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
    selector: 'app-info-panel',
    templateUrl: './info-panel.component.html',
    styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
    constructor(private userService: UserService) {  }

    page: string;
    selectedTask: object;

    ngOnInit() {
        this.page = 'dashboard';
        this.selectedTask = null;
    }

    get setPageFunc() {
        return this.setPage.bind(this);
    }

    setPage(page: string) {
        this.page = page;
    }

    receiveTaskCommit($event) {
        this.selectedTask = $event;
        this.page = 'commit';
    }

    receivePage($event) {
        this.page = $event;
    }
 
}