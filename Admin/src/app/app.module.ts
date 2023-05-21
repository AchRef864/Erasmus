import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminDetailsEditComponent } from './admin-details-edit/admin-details-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { EventsComponent } from './events/events.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminDetailsEditComponent,
    AdminSideNavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StaffComponent,
    ProjectsComponent,
    AnnouncementsComponent,
    EventsComponent,
    SettingsComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
