import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts-list/contacts.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  constructor() { }

  ngOnInit(): void {
  }


}
