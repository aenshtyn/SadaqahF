import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {

  donations: any;
  currentDonation= null;
  currentIndex = -1;
  title ='';

  constructor( private donationService: DonationService) { }

  ngOnInit(): void {
    this.retrieveDonations();
  }

  retrieveDonations(): void {
    this.donationService.getAll()
    .subscribe(
      data => {
        this.donations = data;
        console.log(data);

      },

      error => {
        console.log(error);
      });
  
  }

  refreshList(): void {
    this.retrieveDonations();
    this.currentDonation = null;
    this.currentIndex =-1;

  }

  setActiveDonation(donation, index): void {
    this.currentDonation = donation;
    this.currentIndex = index;
  }

  removeAllDonations(): void {
    this.donationService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveDonations();
      },

      error => {
        console.log(error);
      });
  }

  searchTitle(): void {
    this.donationService.findByTitle(this.title)
    .subscribe(
      data => {
        this.donations =data;
        console.log(data);

      },

      error => {
        console.log(error);
      });
  }

}
