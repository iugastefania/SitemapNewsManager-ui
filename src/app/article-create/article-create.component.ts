import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent {
  articleForm: FormGroup;
  notificationMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private notificationService: NotificationService
  ) {
    this.articleForm = this.formBuilder.group({
      loc: ['', Validators.required],
      lastmod: ['', Validators.required],
      channelName: ['', Validators.required],
      description: ['', Validators.required],
      thumbnail: ['', Validators.required],
      title: ['', Validators.required], 
    });
  }

  onSubmit(): void {
    if (this.articleForm.invalid) {
      return;
    }

    const newArticle: Url = this.articleForm.value;

    this.articleService.addArticle(newArticle).subscribe(
      (response) => {
        this.notificationMessage = 'Article created successfully!';
        this.notificationService.showSuccess(this.notificationMessage);
      },
      (error) => {
        this.notificationMessage = 'Failed to create article.';
        this.notificationService.showError(this.notificationMessage);
      }
    );
  }
}
