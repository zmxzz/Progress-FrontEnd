import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-task',
    templateUrl: './info.task.component.html',
    styleUrls: ['./info.task.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class InfoTaskComponent implements OnInit{ 
    @Input()
    task: object;
    @Input()
    curr: string;

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
        console.log(this.currValue);
        if (isNaN(this.currValue)) {
            this.currValue = 0;
        }
        this.currWidth = this.currValue + '%';
    }

    getProgress(): number {
        if (this.accomplish === 'todoList') {
            return this.doneList.length / this.todoList.length * 100;
        }
        else {
            return this.timeSpent / this.timeRequired * 100;
        }
    }

    getPlan(): any {
        if (this.accomplish === 'todoList') {
            return this.todoList;
        }
        else {
            return this.timeRequired;
        }
    }

    getDone(): any {
        if (this.accomplish === 'todoList') {
            return this.doneList;
        }
        else {
            return this.timeSpent;
        }
    }

    selected(): boolean {
        return this.taskId === this.curr;
    }

}