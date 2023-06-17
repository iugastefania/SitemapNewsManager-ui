import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-urls-from-sitemap',
  templateUrl: './urls-from-sitemap.component.html',
  styleUrls: ['./urls-from-sitemap.component.css']
})
export class UrlsFromSitemapComponent implements OnInit {
  urls: Url[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const loc = params['loc'];
      if (loc) {
        this.fetchUrlsFromSitemap(loc);
      }
    });
  }

  fetchUrlsFromSitemap(sitemapName: string) {
    this.articleService.getUrlNews(sitemapName).subscribe(
      (urls: Url[]) => {
        this.urls = urls;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
