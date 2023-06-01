import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlListComponent } from './url-list/url-list.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ArticleThumbnailComponent } from './article-thumbnail/article-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UrlEditComponent } from './url-edit/url-edit.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { UrlEditPopupComponent } from './url-edit-popup/url-edit-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    UrlDetailsComponent,
    UrlFormComponent,
    ChannelListComponent,
    ArticleThumbnailComponent,
    NavbarComponent,
    HomeComponent,
    UrlEditComponent,
    SearchComponent,
    FooterComponent,
    UrlEditPopupComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
