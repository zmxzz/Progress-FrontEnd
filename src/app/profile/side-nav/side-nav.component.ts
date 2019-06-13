import { Component } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent { 
    selected: string = '';

    assign(selectedItem: string) {
        this.selected = selectedItem;
    }
 }