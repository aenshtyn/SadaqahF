import { Component, OnInit } from '@angular/core';
import { AppealService } from 'src/app/services/appeal.service';

@Component({
  selector: 'app-add-appeal',
  templateUrl: './add-appeal.component.html',
  styleUrls: ['./add-appeal.component.css']
})
export class AddAppealComponent implements OnInit {

  appeal = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private appealService:AppealService) { }

  ngOnInit(): void {
  }

  saveAppeal(): void {
    const data = {
      title: this.appeal.title,
      description: this.appeal.description
    };

    this.appealService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;

      },

      error => {
        console.log(error);

      });
  }

  newAppeal(): void {
    this.submitted = false;
    this.appeal = {
      title: '',
      description: '',
      published: false
    };
  }

}
