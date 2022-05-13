import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contacts-list/contacts.model';


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  
  @Input() contact!: Contact;
  
  constructor() { }


  ngOnInit(): void {
  }

}
