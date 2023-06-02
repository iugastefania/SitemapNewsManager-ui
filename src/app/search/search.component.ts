import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: { loc: string, description: string, thumbnail: string, title: string } = {
    loc: '',
    description: '',
    thumbnail: '',
    title: ''
  };
  searchResults: Url[] = [];
  showNoResultsMessage: boolean = false;

  constructor(private articleService: ArticleService) { }

  searchArticles() {
    this.articleService.getArticle(this.searchQuery.loc).subscribe(
      (article: Url) => {
        this.searchResults = [article];
        this.showNoResultsMessage = this.searchResults.length === 0; // Show "No results found" message if searchResults is empty
        console.log('Search Results:', this.searchResults);
      },
      (error: any) => {
        this.searchResults = []; // Clear the searchResults array
        this.showNoResultsMessage = true; // Show "No results found" message
        console.error(error);
      }
    );
  }
}
