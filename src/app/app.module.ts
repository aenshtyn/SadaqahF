import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppealsListComponent } from './components/appeals-list/appeals-list.component';
import { AppealComponent } from './components/appeal/appeal.component';
import { AddAppealComponent } from './components/add-appeal/add-appeal.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppealDetailsComponent } from './components/appeal-details/appeal-details.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule,  MatIconModule,  MatCardModule,  MatButtonModule,  MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppealsListComponent,
    AppealComponent,
    AddAppealComponent,
    AppealDetailsComponent,
    DonationsListComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
    // MatButtonModule,
    // MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
