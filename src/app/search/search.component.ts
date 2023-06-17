import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: {
    loc: string;
    description: string;
    thumbnail: string;
    title: string;
  } = {
    loc: '',
    description: '',
    thumbnail: '',
    title: '',
  };
  searchResults: Url[] = [];
  showNoResultsMessage: boolean = false;

  constructor(private articleService: ArticleService) {}

  searchArticles() {
    this.articleService.getArticle(this.searchQuery.loc).subscribe(
      (article: Url) => {
        this.searchResults = [article];
        this.showNoResultsMessage = this.searchResults.length === 0;
        console.log('Search Results:', this.searchResults);
      },
      (error: any) => {
        this.searchResults = [];
        this.showNoResultsMessage = true;
        console.error(error);
      },
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return dateString;
    }

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };

    return date.toLocaleString('en-US', options);
  }
}
