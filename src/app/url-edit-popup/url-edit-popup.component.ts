// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ArticleService } from '../services/article.service';
// import { Url } from '../models/url.model';
// import { NotificationService } from '../services/notification.service';

// @Component({
//   selector: 'app-url-edit-popup',
//   templateUrl: './url-edit-popup.component.html',
//   styleUrls: ['./url-edit-popup.component.css']
// })
// export class UrlEditPopupComponent implements OnInit {
//   article: Url = new Url();

//   constructor(
//     private dialogRef: MatDialogRef<UrlEditPopupComponent>,
//     private articleService: ArticleService,
//     private notificationService: NotificationService,
//     @Inject(MAT_DIALOG_DATA) public data: Url
//   ) {}

//   ngOnInit() {
//     // Fetch the URL details using the data passed to the dialog
//     this.articleService.getArticle(this.data.loc).subscribe(
//       (url: Url) => {
//         this.article = url;
//       },
//       (error: any) => {
//         console.error('Failed to fetch URL details:', error);
//       }
//     );
//   }

//   submitForm() {
//     // Call the updateArticle method from the ArticleService passing the updated article
//     this.articleService.updateArticle(this.article).subscribe(
//       (response: string) => {
//         console.log('API Response:', response);
//         console.log('URL updated successfully:', response);
//         // Show success notification
//         this.notificationService.showSuccess('Article updated successfully');
  
//         // Close the dialog and pass the updated article as the result
//         this.dialogRef.close(this.article);
//       },
//       (error: any) => {
//         console.error('Failed to update article:', error);
//         // Show error notification
//         this.notificationService.showError('Failed to update article');
//       }
//     );
//   }
  

//   cancel() {
//     // Close the dialog without making any changes
//     this.dialogRef.close();
//   }
  
// }
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-url-edit-popup',
  templateUrl: './url-edit-popup.component.html',
  styleUrls: ['./url-edit-popup.component.css']
})
export class UrlEditPopupComponent implements OnInit {
  article: Url = new Url();
  cancelClicked: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<UrlEditPopupComponent>,
    private articleService: ArticleService,
    private notificationService: NotificationService,
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
        console.log('API Response:', response);
        console.log('URL updated successfully:', response);

        if (!this.cancelClicked) {
          // Show success notification only if the cancel button was not clicked
          this.notificationService.showSuccess('Article updated successfully');
        }

        // Close the dialog and pass the updated article as the result
        this.dialogRef.close(this.article);
      },
      (error: any) => {
        console.error('Failed to update article:', error);
        // Show error notification
        this.notificationService.showError('Failed to update article');
      }
    );
  }

  cancel() {
    // Set the cancelClicked flag to true
    this.cancelClicked = true;
    // Close the dialog without making any changes
    this.dialogRef.close();
  }
}
