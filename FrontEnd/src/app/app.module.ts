import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BackgroundComponent } from './background/background.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TouristComponent } from './tourist/tourist.component';
import { UniversityComponent } from './university/university.component';
import { ProgramComponent } from './program/program.component';
import { TeamComponent } from './team/team.component';
import { Ka1Component } from './ka1/ka1.component';
import { CbheComponent } from './cbhe/cbhe.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    BackgroundComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    TouristComponent,
    UniversityComponent,
    ProgramComponent,
    TeamComponent,
    Ka1Component,
    CbheComponent,
    AnnonceComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
