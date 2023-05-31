import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    UrlEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
