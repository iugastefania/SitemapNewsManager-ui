import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { NavbarComponent  } from './navbar/navbar.component';
import { HomeComponent   } from './home/home.component';


const routes: Routes = [
  { path: 'url-form', component: UrlFormComponent },
  { path: 'url-details', component: UrlDetailsComponent },
  { path: 'url-list', component: UrlListComponent },
  { path: 'channel-list', component: ChannelListComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  // Add any additional routes here if needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

