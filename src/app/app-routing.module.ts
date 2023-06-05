import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { HomeComponent   } from './home/home.component';
import { UrlEditComponent } from './url-edit/url-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { SearchComponent } from './search/search.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'url-details/:id', component: UrlDetailsComponent },
  { path: 'url-list', component: UrlListComponent },
  { path: 'channel-list', component: ChannelListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'url-edit/:id', component: UrlEditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article-create', component: ArticleCreateComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authentication', component: AuthenticationComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

