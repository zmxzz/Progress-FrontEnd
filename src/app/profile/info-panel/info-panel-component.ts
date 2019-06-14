import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { PanelService } from 'src/service/panel.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-info-panel',
    templateUrl: './info-panel.component.html',
    styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit, OnDestroy {
    page: string = '';
    selectedTask: object;
    pageSubsription: Subscription;

    constructor(private userService: UserService, private panelService: PanelService) {
        this.pageSubsription = this.panelService.getPage().subscribe(page => {
            this.page = page;
        });
    }

    ngOnInit() {
        this.selectedTask = null;
    }

    ngOnDestroy() {
        this.pageSubsription.unsubscribe();
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