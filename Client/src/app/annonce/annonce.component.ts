import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annonces: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/annonces').subscribe(items => {
      this.annonces = items
    });
  }

}
