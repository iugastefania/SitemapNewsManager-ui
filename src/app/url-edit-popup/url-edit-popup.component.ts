import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { NotificationService } from '../services/notification.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-url-edit-popup',
  templateUrl: './url-edit-popup.component.html',
  styleUrls: ['./url-edit-popup.component.css'],
})
export class UrlEditPopupComponent implements OnInit {
  article: Url = new Url();
  cancelClicked: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<UrlEditPopupComponent>,
    private articleService: ArticleService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Url,
  ) {}

  ngOnInit() {
    this.articleService.getArticle(this.data.loc).subscribe(
      (url: Url) => {
        this.article = url;
      },
      (error: any) => {
        console.error('Failed to fetch URL details:', error);
      },
    );
  }

  submitForm() {
    this.articleService.updateArticle(this.article).subscribe(
      (response: string) => {
        console.log('API Response:', response);
        console.log('URL updated successfully:', response);

        if (!this.cancelClicked) {
          this.notificationService.showSuccess('Article updated successfully');
        }

        this.dialogRef.close(this.article);
      },
      (error: any) => {
        console.error('Failed to update article:', error);
        this.notificationService.showError('Failed to update article');
      },
    );
  }

  cancel() {
    this.cancelClicked = true;
    this.dialogRef.close();
  }
}
