import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Url } from '../models/url.model';


@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
  articles: Url[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['articles']) {
        this.articles = JSON.parse(params['articles']);
      }
    });
  }

  viewUrlDetails(url: Url) {
    // Navigate to the UrlDetailsComponent with the selected article
    this.router.navigate(['/url-details', url.loc]);
  }

  // editUrl(url: Url) {
  //   // Implement the logic to edit the selected URL
  //   console.log('Edit URL:', url);

  //   // Call the updateArticle method from the ArticleService
  //   this.articleService.updateArticle(url).subscribe(
  //     (response: string) => {
  //       console.log('URL updated successfully:', response);
  //     },
  //     (error: any) => {
  //       console.error('Failed to update URL:', error);
  //     }
  //   );
  // }

  deleteUrl(url: Url) {
    // Implement the logic to delete the selected URL
    console.log('Delete URL:', url);

    // Call the deleteArticle method from the ArticleService
    this.articleService.deleteArticle(url.loc).subscribe(
      (response: string) => {
        console.log('URL deleted successfully:', response);
      },
      (error: any) => {
        console.error('Failed to delete URL:', error);
      }
    );
  }
}
