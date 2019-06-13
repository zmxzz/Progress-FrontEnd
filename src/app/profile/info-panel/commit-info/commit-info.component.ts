import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/service/task.service';

@Component({
    selector: 'app-commit-info',
    templateUrl: './commit-info.component.html',
    styleUrls: ['./commit-info.component.css']
})
export class CommitInfoComponent implements OnInit {
    @Input()
    task: object;
    accomplish: string;
    statusList: [string, boolean][] = [];
    taskname: string;
    timeSpent: number;
    timeRequired: number;

    addHour: number = 0;

    @Output() pageEvent = new EventEmitter<string>();

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        console.log(this.task);
        this.accomplish = this.task['accomplish'];
        this.taskname = this.task['taskname'];
        if (this.accomplish === 'todoList') {
            for (let i = 0; i < this.task['todoList'].length; i++) {
                this.statusList.push([this.task['todoList'][i], false]);
            }
            for (let i = 0; i < this.task['doneList'].length; i++) {
                this.statusList[this.task['doneList'][i]][1] = true;
            }
        }
        else {
            this.timeRequired = this.task['timeRequired'];
            this.timeSpent = this.task['timeSpent'];
            this.addHour = 0;
        }
    }

    cancel() {
        this.pageEvent.emit('dashboard');
    }

    commit() {
        if (this.accomplish === 'hours') {
            this.task['timeSpent'] += Number(this.addHour);
        }
        else {
            let doneList: number[] = [];
            for (let i = 0; i < this.statusList.length; i++) {
                if (this.statusList[i][1]) {
                    doneList.push(i);
                }
            }
            this.task['doneList'] = doneList;
        }

        this.taskService.updateTask(this.task, (res, err) => {
            if (res) {
                this.cancel();
            }
            if (err) {
                throw err;
            }
        })

    }

    flip(pair: [string, boolean]): void {
        pair[1] = !pair[1];
    }


}