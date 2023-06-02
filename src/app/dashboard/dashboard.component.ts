// import { Component, OnInit } from '@angular/core';
// import { ArticleService } from '../services/article.service';
// import { Sitemap } from '../models/sitemap.model';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   sitemaps: Sitemap[] = [];

//   constructor(private articleService: ArticleService) {}

//   ngOnInit() {
//     this.fetchSitemaps();
//   }

//   fetchSitemaps() {
//     this.articleService.getSitemapNews().subscribe(
//       (sitemaps: Sitemap[]) => {
//         this.sitemaps = sitemaps;
//       },
//       (error: any) => {
//         console.error('Failed to fetch sitemaps:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Sitemap } from '../models/sitemap.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // sitemaps: Sitemap[] = [];
  channelNames: string[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    // this.fetchSitemaps();
    this.fetchChannelNames();
  }

  // fetchSitemaps() {
  //   this.articleService.getSitemapNews().subscribe(
  //     (sitemaps: Sitemap[]) => {
  //       this.sitemaps = sitemaps;
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch sitemaps:', error);
  //     }
  //   );
  // }

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

  redirectToURLList(channelName: string) {
    this.router.navigate(['/url-list'], { queryParams: { channelName: channelName } });
  }

}
