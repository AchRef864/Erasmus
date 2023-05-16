import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TouristComponent } from './tourist/tourist.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { BackgroundComponent } from './background/background.component';
import { CbheComponent } from './cbhe/cbhe.component';
import { Ka1Component } from './ka1/ka1.component';
import { ProgramComponent } from './program/program.component';
import { UniversityComponent } from './university/university.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tourist', component: TouristComponent },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'cbhe', component: CbheComponent },
  { path: 'ka1', component: Ka1Component },
  { path: 'program', component: ProgramComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'team', component: TeamComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
