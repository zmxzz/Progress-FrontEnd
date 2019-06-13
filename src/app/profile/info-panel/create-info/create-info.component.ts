import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { TaskService } from '../../../../service/task.service';
import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-create-info',
    templateUrl: './create-info.component.html',
    styleUrls: ['./create-info.component.css']
})
export class CreateInfoComponent implements OnInit {
    name: string;
    category: string;
    todoList: [string, string][] = [];
    timeRequired: number;
    timeSpent: number;
    accomplish: string;

    @Output() pageEvent = new EventEmitter<string>();

    ngOnInit() {
        this.accomplish = 'ask';
    }

    constructor(private taskService: TaskService){};

    setHours() {
        this.accomplish = 'hours';
    }

    setTodoList() {
        this.accomplish = 'todoList';
    }

    addTodo() {
        this.todoList.push(['', 'To Do ' + (this.todoList.length + 1)]);
    }

    done() {
        let postTaskInfo = this.getTaskInfo();
        this.taskService.addTask(postTaskInfo, (res, err) => {
            if (err) {
                throw err;
            }
            else {
                this.pageEvent.emit('dashboard');
                location.reload();
            }
        })
    }

    getTaskInfo() {
        if (this.accomplish === 'hours') {
            return {
                taskname: this.name,
                accomplish: 'hours',
                category: this.category,
                timeRequired: this.timeRequired,
                timeSpent: this.timeSpent
            };
        }
        let postTodoList: string[] = [];
        for (let i: number = 0; i < this.todoList.length; i++) {
            postTodoList.push(this.todoList[i][0]);
        }
        return {
            taskname: this.name,
            accomplish: 'hours',
            category: this.category,
            todoList: postTodoList,
            doneList: []
        };
    }

    cancel() {
        this.pageEvent.emit('dashboard');
    }

}