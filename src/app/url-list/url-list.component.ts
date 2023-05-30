import { Component, OnInit } from '@angular/core';
import { Url } from '../url.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
  articles!: Url[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAllArticlesByChannel('triathlon').subscribe(
      (articles: Url[]) => {
        this.articles = articles;
        console.log(this.articles); // Do something with the retrieved articles
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}