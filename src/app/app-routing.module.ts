import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';
import { SitemapListComponent } from './sitemap-list/sitemap-list.component';
import { HomeComponent } from './home/home.component';
import { UrlEditComponent } from './url-edit/url-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { SearchComponent } from './search/search.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { authAdminGuard } from './helpers/auth-admin.guard';
import { authEditorGuard } from './helpers/auth-editor.guard';
import { authViewerGuard } from './helpers/auth-viewer.guard';
import { UrlsFromSitemapComponent } from './urls-from-sitemap/urls-from-sitemap.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'url-details/:id',
    component: UrlDetailsComponent,
    canActivate: [authEditorGuard],
  },
  {
    path: 'url-list',
    component: UrlListComponent,
    canActivate: [authViewerGuard],
  },
  {
    path: 'sitemap-list',
    component: SitemapListComponent,
    canActivate: [authViewerGuard],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'url-edit/:id',
    component: UrlEditComponent,
    canActivate: [authEditorGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authViewerGuard],
  },
  {
    path: 'article-create',
    component: ArticleCreateComponent,
    canActivate: [authEditorGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [authViewerGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'authentication', component: AuthenticationComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'urlfromsitemap',
    component: UrlsFromSitemapComponent,
    canActivate: [authViewerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
