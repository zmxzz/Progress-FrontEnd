import { Component } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side_nav.component.html',
    styleUrls: ['./side_nav.component.css']
})
export class SideNavComponent { 
    selected: string = '';

    assign(selectedItem: string) {
        this.selected = selectedItem;
    }
 }