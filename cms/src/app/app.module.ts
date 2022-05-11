import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,ContactsComponent,ContactsListComponent,ContactDetailComponent]
})
export class AppModule { }
