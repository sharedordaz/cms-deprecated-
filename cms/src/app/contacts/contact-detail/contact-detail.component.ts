import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
// export class ContactDetailComponent implements OnInit {
//   @Input() contact: Contact;
//   constructor() { }

//   ngOnInit(): void {
//   }

//   importData(){
    
//   }
//   onEdit(){

//   }

//   onDelete(){
    
//   }
// }
export class ContactDetailComponent implements OnInit {
  @Input()
  contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
