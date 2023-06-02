import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
})
export class ArticleCreateComponent {
  articleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) {
    this.articleForm = this.formBuilder.group({
      loc: ['', Validators.required],
      lastmod: ['', Validators.required],
      channelName: ['', Validators.required],
      description: ['', Validators.required],
      thumbnail: ['', Validators.required],
      title: ['', Validators.required], // Add the title form control
    });
  }

  onSubmit(): void {
    if (this.articleForm.invalid) {
      return;
    }

    const newArticle: Url = this.articleForm.value;

    this.articleService.addArticle(newArticle).subscribe(
      (response) => {
        // Article added successfully
      },
      (error) => {
        // Handle error
      }
    );
  }
}
