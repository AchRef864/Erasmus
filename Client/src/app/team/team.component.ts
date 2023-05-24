import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/staff').subscribe(items => {
      this.items = items;
    });
  }
}
