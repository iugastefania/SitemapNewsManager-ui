import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlListComponent } from './url-list/url-list.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ArticleThumbnailComponent } from './article-thumbnail/article-thumbnail.component';
import { HomeComponent } from './home/home.component';
import { UrlEditComponent } from './url-edit/url-edit.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { UrlEditPopupComponent } from './url-edit-popup/url-edit-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPopupComponent } from './admin-popup/admin-popup.component';
import { ChangeRoleDialogComponent } from './change-role-dialog/change-role-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    UrlDetailsComponent,
    ChannelListComponent,
    ArticleThumbnailComponent,
    HomeComponent,
    UrlEditComponent,
    SearchComponent,
    FooterComponent,
    UrlEditPopupComponent,
    DashboardComponent,
    ArticleCreateComponent,
    ConfirmationDialogComponent,
    AuthenticationComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminPopupComponent,
    ChangeRoleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule, 
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
