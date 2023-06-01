// import { Component, OnInit } from '@angular/core';
// import { ArticleService } from '../services/article.service';
// import { Url } from '../models/url.model';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-channel-list',
//   templateUrl: './channel-list.component.html',
//   styleUrls: ['./channel-list.component.css']
// })
// export class ChannelListComponent implements OnInit {
//   channelNames: string[] = [];
//   articles: Url[] = [];

//   constructor(private articleService: ArticleService, private router: Router) { }

//   ngOnInit() {
//     this.fetchChannelNames();
//   }

//   fetchChannelNames() {
//     this.articleService.getAllChannelNames().subscribe(
//       (channelNames: string[]) => {
//         this.channelNames = channelNames;
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   onChannelButtonClick(channelName: string) {
//     this.articleService.getAllArticlesByChannel(channelName).subscribe(
//       (articles: Url[]) => {
//         this.articles = articles;
//         console.log(this.articles); // Do something with the retrieved articles
  
//         // Navigate to the UrlListComponent and pass the articles as query parameters
//         this.router.navigate(['/url-list'], { queryParams: { articles: JSON.stringify(this.articles) } });
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

  
// }
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channelNames: string[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.fetchChannelNames();
  }

  fetchChannelNames() {
    this.articleService.getAllChannelNames().subscribe(
      (channelNames: string[]) => {
        this.channelNames = channelNames;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onChannelButtonClick(channelName: string) {
    this.router.navigate(['/url-list'], { queryParams: { channelName: channelName } });
  }
}
