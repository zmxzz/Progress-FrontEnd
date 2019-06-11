import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/service/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-info-detail',
    templateUrl: './info.detail.component.html',
    styleUrls: ['./info.detail.component.css']
})
export class InfoDetailComponent implements OnInit { 
    @Input()
    accomplish: string;
    @Input()
    id: string;
    @Input()
    plan: any;
    @Input()
    done: any;

    status: string;
    stage: string;
    total: string;

    constructor(private taskService: TaskService, private router: Router) {  }


    ngOnInit() {
        if (this.accomplish === 'todoList') {
            this.status = 'Things Done: ' + this.done.length;
            this.stage = 'Current Stage: ' + this.done.length / this.plan.length * 100;
            this.total = 'Total Stage: ' + this.plan.length;
        }
        else {
            this.status = 'Hours Spend: ' + this.done;
            this.stage = 'Current Stage: ' + this.done / this.plan * 100;
            this.total = 'Total Hours: ' + this.plan;
        }

    }

    deleteTask() {
        this.taskService.deleteTask(this.id, (res, err) => {
            console.log(res);
            if (res) {
                this.router.navigate(['/']);
            }
            else {
                console.log(err);
                throw err;
            }
        });
    }

    commitTask() {

    }

    

}