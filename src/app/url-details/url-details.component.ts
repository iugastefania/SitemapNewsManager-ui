import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { UrlEditPopupComponent } from '../url-edit-popup/url-edit-popup.component';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.css']
})
export class UrlDetailsComponent implements OnInit {
  article: Url | undefined;
  formattedDate: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private dialog: MatDialog 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const loc = params['id'];
      this.articleService.getArticle(loc).subscribe(
        (url: Url) => {
          this.article = url;
          this.formatDate();
        },
        (error: any) => {
          console.error('Failed to fetch URL details:', error);
        }
      );
    });
  }

  formatDate() {
    if (this.article?.lastmod) {
      const date = new Date(this.article.lastmod);

      if (isNaN(date.getTime())) {
        this.formattedDate = this.article.lastmod;
      } else {
        const options: Intl.DateTimeFormatOptions = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        };

        this.formattedDate = date.toLocaleString('en-US', options);
      }
    }
  }

  editArticle() {
    const dialogRef = this.dialog.open(UrlEditPopupComponent, {
      width: '600px',
      data: this.article
    });

    dialogRef.afterClosed().subscribe((result: Url) => {
      if (result) {
        this.article = result;
      }
    });
  }
}
