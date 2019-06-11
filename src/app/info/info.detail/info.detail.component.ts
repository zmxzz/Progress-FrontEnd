import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-detail',
    templateUrl: './info.detail.component.html',
    styleUrls: ['./info.detail.component.css']
})
export class InfoDetailComponent implements OnInit { 
    @Input()
    accomplish: string;
    @Input()
    plan: any;
    @Input()
    done: any;

    status: string;
    stage: string;
    total: string;


    ngOnInit() {
        if (this.accomplish === 'todoList') {
            this.status = 'Things Done: ' + this.done.length;
            this.stage = 'Current Stage: ' + this.done.length / this.plan.length;
            this.total = 'Total Stage: ' + this.plan.length;
        }
        else {
            this.status = 'Hours Spend: ' + this.done;
            this.stage = 'Current Stage: ' + this.done / this.plan;
            this.total = 'Total Hours: ' + this.plan;
        }

    }

    deleteTask() {

    }

    commitTask() {

    }

    

}