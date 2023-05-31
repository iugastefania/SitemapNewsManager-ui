import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {
  article: Url | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const loc = params['id'];
      this.articleService.getArticle(loc).subscribe(
        (url: Url) => {
          this.article = url;
        },
        (error: any) => {
          console.error('Failed to fetch URL details:', error);
        }
      );
    });
  }

  editArticle() {
    // Navigate to the UrlEditComponent with the current article ID
    this.router.navigate(['/url-edit', this.article?.loc]);
  }
}
