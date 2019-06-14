import { Component } from '@angular/core';
import { PanelService } from 'src/service/panel.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent { 
    selected: string = '';

    constructor(private panelService: PanelService) {}

    assign(selectedItem: string) {
        this.selected = selectedItem;
        this.panelService.changePage(this.selected);
    }
 }