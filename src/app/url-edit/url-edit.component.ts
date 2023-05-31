import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Url } from '../models/url.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-url-edit',
  templateUrl: './url-edit.component.html',
  styleUrls: ['./url-edit.component.css']
})
export class UrlEditComponent implements OnInit {
  article: Url = new Url(); // Create an instance of the Url model

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    // Retrieve the URL location from the route parameters
    const loc = this.route.snapshot.params['loc'];

    // Fetch the URL details using the location from your data source
    this.articleService.getArticle(loc).subscribe(
      (url: Url) => {
        this.article = url;
      },
      (error: any) => {
        console.error('Failed to fetch URL details:', error);
      }
    );
  }

  submitForm() {
    // Call the updateArticle method from the ArticleService passing the updated article
    this.articleService.updateArticle(this.article).subscribe(
      (response: string) => {
        console.log('URL updated successfully:', response);
        // Optionally, you can navigate back to the URL details page
        this.router.navigate(['/url-details', this.article.loc]);
      },
      (error: any) => {
        console.error('Failed to update URL:', error);
      }
    );
  }
}
