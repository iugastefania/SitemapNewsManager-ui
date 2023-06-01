import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Sitemap } from '../models/sitemap.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sitemaps: Sitemap[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.fetchSitemaps();
  }

  fetchSitemaps() {
    this.articleService.getSitemapNews().subscribe(
      (sitemaps: Sitemap[]) => {
        this.sitemaps = sitemaps;
      },
      (error: any) => {
        console.error('Failed to fetch sitemaps:', error);
      }
    );
  }
}
