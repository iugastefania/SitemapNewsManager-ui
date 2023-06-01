import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-url-edit-popup',
  templateUrl: './url-edit-popup.component.html',
  styleUrls: ['./url-edit-popup.component.css']
})
export class UrlEditPopupComponent implements OnInit {
  article: Url = new Url();

  constructor(
    private dialogRef: MatDialogRef<UrlEditPopupComponent>,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: Url
  ) {}

  ngOnInit() {
    // Fetch the URL details using the data passed to the dialog
    this.articleService.getArticle(this.data.loc).subscribe(
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
        // Close the dialog and pass the updated article as the result
        this.dialogRef.close(this.article);
      },
      (error: any) => {
        console.error('Failed to update URL:', error);
      }
    );
  }

  cancel() {
    // Close the dialog without making any changes
    this.dialogRef.close();
  }
}
