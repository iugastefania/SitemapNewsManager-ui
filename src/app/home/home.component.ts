import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { Sitemap } from '../models/sitemap.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredArticles: Url[] = [];
  totalArticles: number = 0;
  totalChannels: number = 0;
  totalSitemaps: number = 0;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.fetchFeaturedArticles();
    this.fetchStatistics();
  }

  fetchFeaturedArticles() {
    // Fetch the featured articles here
    this.articleService.getAllArticlesByChannel('featured').subscribe(
      (articles: Url[]) => {
        this.featuredArticles = articles;
        console.log('Featured Articles:', this.featuredArticles);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  fetchStatistics() {
    // Fetch the statistics here
    this.articleService.getAllChannelNames().subscribe(
      (channelNames: string[]) => {
        this.totalChannels = channelNames.length;
        console.log('Total Channels:', this.totalChannels);
      },
      (error: any) => {
        console.error(error);
      }
    );

  // Fetch all the articles
    this.articleService.getAllUrls().subscribe(
      (articles: Url[]) => {
        this.totalArticles = articles.length;
        console.log('Total Articles:', this.totalArticles);
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.articleService.getSitemapNews().subscribe(
      (sitemaps: Sitemap[]) => {
        this.totalSitemaps = sitemaps.length;
        console.log('Total Sitemaps:', this.totalSitemaps);
      },
      (error: any) => {
        console.error(error);
      }
    );
    
  }
}
