import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  persons = [
    { name: 'John Doe', imgUrl: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe', imgUrl: 'https://via.placeholder.com/150' },
    { name: 'Bob Smith', imgUrl: 'https://via.placeholder.com/150' },
    { name: 'Mary Johnson', imgUrl: 'https://via.placeholder.com/150' },
    { name: 'Tom Wilson', imgUrl: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
