import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskService } from 'src/service/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard-single-info',
    templateUrl: './dashboard-single-info.component.html',
    styleUrls: ['./dashboard-single-info.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class DashboardSingleInfoComponent implements OnInit{ 
    @Input()
    task: object;
    @Input()
    curr: string;
    @Output()
    taskEvent = new EventEmitter<object>();

    constructor(private taskService: TaskService, private router: Router) {}

    accomplish: string;
    category: string;
    taskname: string;
    taskId: string;
    todoList: string[];
    doneList: number[];
    timeSpent: number;
    timeRequired: number;
    currValue: number;
    currWidth: string;

    status: string;
    stage: string;
    total: string;

    ngOnInit() {
        this.accomplish = this.task['accomplish'];
        this.category = this.task['category'];
        this.taskname = this.task['taskname'];
        this.taskId = this.task['_id'];
        if (this.accomplish === 'todoList') {
            this.todoList = this.task['todoList'];
            this.doneList = this.task['doneList'];
        }
        else {
            this.timeSpent = this.task['timeSpent'];
            this.timeRequired = this.task['timeRequired'];
        }
        this.currValue = this.getProgress();
        if (isNaN(this.currValue)) {
            this.currValue = 0;
        }
        this.currWidth = this.currValue + '%';
        this.calculateProgress();
    }

    getProgress(): number {
        if (this.accomplish === 'todoList') {
            return this.doneList.length / this.todoList.length * 100;
        }
        else {
            return this.timeSpent / this.timeRequired * 100;
        }
    }

    selected(): boolean {
        return this.taskId === this.curr;
    }

    calculateProgress(): void {
        if (this.accomplish === 'todoList') {
            this.status = 'Things Done: ' + this.doneList.length;
            this.stage = 'Current Stage: ' + this.doneList.length;
            this.total = 'Total Stage: ' + this.todoList.length;
        }
        else {
            this.status = 'Hours Spend: ' + this.timeSpent;
            this.stage = 'Current Stage: ' + this.timeSpent;
            this.total = 'Total Hours: ' + this.timeRequired;
        }
    }

    deleteTask() {
        this.taskService.deleteTask(this.taskId, (res, err) => {
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
        this.taskEvent.emit(this.task);
    }

}