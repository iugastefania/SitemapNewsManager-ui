import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Sitemap } from '../models/sitemap.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitemap-list',
  templateUrl: './sitemap-list.component.html',
  styleUrls: ['./sitemap-list.component.css'],
})
export class SitemapListComponent implements OnInit {
  channelSitemaps: Sitemap[] = [];
  pageSize: number = 20;
  currentPage: number = 0;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.fetchChannelSitemaps();
  }

  fetchChannelSitemaps() {
    this.articleService.getSitemapNews().subscribe(
      (sitemaps: Sitemap[]) => {
        this.channelSitemaps = sitemaps;
      },
      (error: any) => {
        console.error(error);
      },
    );
  }

  navigateToUrlFromSitemap(loc: string) {
    this.router.navigate(['/articlefromsitemap'], {
      queryParams: { loc: loc },
    });
  }

  openSitemapInNewTab(url: string) {
    window.open(url, '_blank');
  }

  getCurrentPageSitemaps(): Sitemap[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.channelSitemaps.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(pageIndex: number): void {
    this.currentPage = pageIndex;
  }
}
