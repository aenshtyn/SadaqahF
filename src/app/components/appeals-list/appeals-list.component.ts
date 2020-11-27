import { Component, OnInit } from '@angular/core';
import { AppealService } from 'src/app/services/appeal.service';

@Component({
  selector: 'app-appeals-list',
  templateUrl: './appeals-list.component.html',
  styleUrls: ['./appeals-list.component.css']
})
export class AppealsListComponent implements OnInit {

  appeals: any;
  currentAppeal= null;
  currentIndex = -1;
  title ='';

  constructor( private appealService: AppealService) { }

  ngOnInit(): void {
    this.retrieveAppeals();
  }

  retrieveAppeals(): void {
    this.appealService.getAll()
    .subscribe(
      data => {
        this.appeals = data;
        console.log(data);

      },

      error => {
        console.log(error);
      });
  
  }

  refreshList(): void {
    this.retrieveAppeals();
    this.currentAppeal = null;
    this.currentIndex =-1;

  }

  setActiveAppeal(appeal, index): void {
    this.currentAppeal = appeal;
    this.currentIndex = index;
  }

  removeAllAppeals(): void {
    this.appealService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveAppeals();
      },

      error => {
        console.log(error);
      });
  }

  searchTitle(): void {
    this.appealService.findByTitle(this.title)
    .subscribe(
      data => {
        this.appeals =data;
        console.log(data);

      },

      error => {
        console.log(error);
      });
  }

}
