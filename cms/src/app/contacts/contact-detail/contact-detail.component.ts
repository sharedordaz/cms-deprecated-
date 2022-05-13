import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts-list/contacts.model';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail: Contact[]= [
  new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg"),
  new Contact(2,"Rex Barzee", "barzeer@byui.edu", 2084963768, "../../assets/images/barzeer.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){

  }

  onDelete(){
    
  }
}
