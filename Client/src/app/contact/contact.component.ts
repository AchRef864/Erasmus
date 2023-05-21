import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void { }

  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted!');
    console.log('Name: ' + this.name);
    console.log('Email: ' + this.email);
    console.log('Message: ' + this.message);

  }
}
