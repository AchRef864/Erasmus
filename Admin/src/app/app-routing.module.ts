import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'announce', component: AnnouncementsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'sidebar', component: AdminSideNavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
