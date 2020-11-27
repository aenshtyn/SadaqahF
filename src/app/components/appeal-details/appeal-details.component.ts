import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppealService } from 'src/app/services/appeal.service';
@Component({
  selector: 'app-appeal-details',
  templateUrl: './appeal-details.component.html',
  styleUrls: ['./appeal-details.component.css']
})
export class AppealDetailsComponent implements OnInit {

  currentAppeal = null;
  message = '';

  constructor(
    private appealService: AppealService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAppeal(this.route.snapshot.paramMap.get('id'));
  }

  getAppeal(id): void {
    this.appealService.get(id)
    .subscribe(
      data=> {
        this.currentAppeal = data;
        console.log(data);
      },

      error => {
        console.log(error);
      });
    
  }

  updatePublished(status): void {
    const data = {
      title: this.currentAppeal.title,
      description: this.currentAppeal.description,
      published: status
    };

    this.appealService.update(this.currentAppeal.id, data)
    .subscribe(
      response => {
        this.currentAppeal.published = status;
        console.log(response);
      },

      error => {
        console.log(error);

      });
    
  }

  updateAppeal(): void {
    this.appealService.update(this.currentAppeal.id, this.currentAppeal)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The appeal was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }

  deleteAppeal(): void {
    this.appealService.delete(this.currentAppeal.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/appeals']);
      },

      error => {
        console.log(error);
      });
  }

}
