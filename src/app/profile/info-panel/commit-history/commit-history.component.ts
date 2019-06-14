import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/service/task.service';

@Component({
    selector: 'app-commit-history',
    templateUrl: './commit-history.component.html',
    styleUrls: ['./commit-history.component.css']
})
export class CommitHistoryComponent implements OnInit {

    constructor(private taskService: TaskService) {}

    commitHistory: object;
    commitList = [];
    data: any = [{
        "date": "2019-1-1",
        "total": 100,
        "details": []
      },
      {
        "date": "2019-01-02",
        "total": 100,
        "details": []
      }];

      loaded: boolean = false;

    ngOnInit() {

        this.taskService.getCommitHistory((res, err) => {
            if (err) {
                console.log('err is ' + err);
                throw err;
            }
            else {
                this.commitHistory = res;
                for (let i = 0; i < this.commitHistory['commits'].length; i++) {
                    let curr = this.commitHistory['commits'][i];
                    this.commitList.push({
                        "date": curr['date'],
                        "total": curr['total'],
                        "details": []
                    });
                }
                this.loaded = true;
            }
        });
    }
}