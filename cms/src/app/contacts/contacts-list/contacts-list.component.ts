import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from './contacts.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent<T> implements OnInit {
  contacts: Contact[] = [new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg"),
  new Contact(2,"Rex Barzee", "barzeer@byui.edu", 2084963768, "../../assets/images/barzeer.jpg")]



  // contacts: Contact[] = [new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg"),
  // new Contact(2,"Rex Barzee", "barzeer@byui.edu", 2084963768, "../../assets/images/barzeer.jpg")
  // ];
  @Output()
  selectedContactEvent = new EventEmitter<Contact>();
  constructor() {
   }

  ngOnInit() {
  }
  onNewContact(){ 
  }

  onSelected(contact:Contact){
   
    this.selectedContactEvent.emit(contact);
  }

}
