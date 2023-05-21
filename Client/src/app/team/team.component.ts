import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  persons = [
    {
      name: 'John Doe',
      imgUrl: 'https://via.placeholder.com/150',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        facebook: 'https://facebook.com/johndoe',
      },
    },
    {
      name: 'Jane Doe',
      imgUrl: 'https://via.placeholder.com/150',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        facebook: 'https://facebook.com/johndoe',
      },
    },
    {
      name: 'Tom Wilson',
      imgUrl: 'https://via.placeholder.com/150',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        facebook: 'https://facebook.com/johndoe',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
