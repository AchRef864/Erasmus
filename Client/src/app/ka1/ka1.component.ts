import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ka1',
  templateUrl: './ka1.component.html',
  styleUrls: ['./ka1.component.css']
})
export class Ka1Component implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/ka1').subscribe(items => {
      this.items = items;
    });
  }
}
