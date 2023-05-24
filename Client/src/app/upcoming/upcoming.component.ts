import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  events: any[] = [];
  showPopup = false;
  cin = '';
  firstName = '';
  lastName = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/events').subscribe(items => {
      this.events = items;
    });
  }

  openPopup(): void {
    this.showPopup = true;
  }

  submitForm(): void {
    // Perform any necessary validation or processing here

    // Close the pop-up
    this.showPopup = false;
    const mailtoLink = 'mailto:eacea-info@ec.europa.eu?subject=Participation Request&body=CIN: ' + this.cin + '%0D%0AFirst Name: ' + this.firstName + '%0D%0ALast Name: ' + this.lastName;
    window.location.href = mailtoLink;
  }

}
