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
import { CheckNavComponent } from './check_nav/check_nav.component';
import { SideNavComponent } from './side_nav/side_nav.component';
import { InfoPanelComponent } from './info/info.panel/info.panel.component';
import { InfoTaskComponent } from './info/info.task/info.task.component';
import { InfoDetailComponent } from './info/info.detail/info.detail.component';


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
    InfoTaskComponent,
    InfoDetailComponent
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
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
