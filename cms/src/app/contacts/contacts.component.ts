import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
 export class ContactsComponent implements OnInit {
  // //  samplecontact: Contact = new Contact(1, "R.Kent Jackson", "jacksonk@BYU.edu",2084963771,"../../assets/images/jacksonk.jpg")
   selectedContact!: Contact;
   constructor() { }
   ngOnInit(): void {
   }
  // //  alertLog(param){
  // //    alert(param);
  // //  }
 }

