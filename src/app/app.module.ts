import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  MatToolbarModule,
  MatSidenavModule, 
  MatButtonModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index.component';
import { ProfileComponent } from './profile/profile.component'
import { UserService } from '../service/user.service';
import { TaskService } from '../service/task.service';
import { PanelService } from '../service/panel.service';
import { CheckNavComponent } from './profile/check-nav/check-nav.component';
import { SideNavComponent } from './profile/side-nav/side-nav.component';
import { InfoPanelComponent } from './profile/info-panel/info-panel-component';
import { DashboardInfoComponent } from './profile/info-panel/dashboard-info/dashboard-info.component';
import { DashboardSingleInfoComponent } from './profile/info-panel/dashboard-info/dashboard-single-info/dashboard-single-info.component';
import { CreateInfoComponent } from './profile/info-panel/create-info/create-info.component';
import { CommitInfoComponent } from './profile/info-panel/commit-info/commit-info.component';
import { CommitHistoryComponent } from './profile/info-panel/commit-history/commit-history.component';
import { CalendarHeatmap } from 'angular2-calendar-heatmap';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ProfileComponent,
    CheckNavComponent,
    SideNavComponent,
    InfoPanelComponent,
    DashboardSingleInfoComponent,
    CreateInfoComponent,
    DashboardInfoComponent,
    CommitInfoComponent,
    CalendarHeatmap,
    CommitHistoryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, TaskService, PanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
