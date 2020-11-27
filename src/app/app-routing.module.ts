import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppealsListComponent } from './components/appeals-list/appeals-list.component';
import { AppealDetailsComponent } from './components/appeal-details/appeal-details.component';
import { AddAppealComponent } from './components/add-appeal/add-appeal.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'appeals', pathMatch: 'full'},
  { path: 'appeals', component: AppealsListComponent},
  { path: 'appeals/:id', component: AppealDetailsComponent},
  { path: 'add', component: AddAppealComponent },
  { path: 'donations', component: DonationsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
