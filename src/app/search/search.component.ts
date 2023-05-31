import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: { loc: string, description: string, thumbnail: string } = {
    loc: '',
    description: '',
    thumbnail: ''
  };
  searchResults: Url[] = [];

  constructor(private articleService: ArticleService) { }

  searchArticles() {
    // Call the articleService method to search for articles based on the searchQuery
    // Example: this.searchResults = this.articleService.searchArticles(this.searchQuery);
  }
}