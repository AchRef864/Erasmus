import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cbhe',
  templateUrl: './cbhe.component.html',
  styleUrls: ['./cbhe.component.css']
})
export class CbheComponent implements OnInit {

  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/cbhe').subscribe(items => {
      this.items = items;
    });
  }
}
