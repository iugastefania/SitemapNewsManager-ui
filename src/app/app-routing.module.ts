import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';


const routes: Routes = [
  { path: 'url-form', component: UrlFormComponent },
  { path: 'url-details', component: UrlDetailsComponent },
  { path: 'url-list', component: UrlListComponent },
  // Add any additional routes here if needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

