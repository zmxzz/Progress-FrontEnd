import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
    selector: 'app-dashboard-info',
    templateUrl: './dashboard-info.component.html',
    styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {
    constructor(private userService: UserService) { }
    tasks: object;
    currTaskId: string;
    @Output()
    taskCommitEvent = new EventEmitter<object>();
    @Output()
    pageEvent = new EventEmitter<string>();

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
        this.currTaskId = task['_id'];
    }

    sendTaskCommit($event) {
        this.taskCommitEvent.emit($event);
    }

    sendCreate() {
        this.pageEvent.emit('create');
    }

}