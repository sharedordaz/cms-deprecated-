import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core'
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg"),
  new Contact(2,"Rex Barzee", "barzeer@byui.edu", 2084963768, "../../assets/images/barzeer.jpg")]

  // // samplecontact: Contact = new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg")

  @Output() selectedContactEvent:EventEmitter<any> = new EventEmitter<Contact>();
  
  @Output() dummyEmitter:EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    
   }
  ngOnInit() {
  }
  onNewContact(){ 
  }
  dummyEmitt(){
    this.dummyEmitter.emit("Dummy send")
  }
  onSelected(contact: Contact) {
    alert("onSelected");
    this.selectedContactEvent.emit(contact);
  }


}

