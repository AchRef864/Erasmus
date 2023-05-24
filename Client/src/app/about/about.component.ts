import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projects: any[] = [];
  events: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPorjects();
    this.getEvents();
  }

  getPorjects(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/projects').subscribe(items => {
      this.projects = items.slice(-3).reverse();
    });
  }

  getEvents(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/events').subscribe(items => {
      this.events = items.slice(-3).reverse();
    });
  }
}
