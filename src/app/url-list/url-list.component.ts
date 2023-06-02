// import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ArticleService } from '../services/article.service';
// import { Url } from '../models/url.model';
// import { MatPaginator, MatPaginatorModule  } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-url-list',
//   templateUrl: './url-list.component.html',
//   styleUrls: ['./url-list.component.css']
// })
// export class UrlListComponent implements OnInit, AfterViewInit  {

//   articles: Url[] = [];
//   pageSize: number = 10; // Number of articles per page
//   currentPage: number = 1; // Current page
//   totalItems: number = 0; // Total number of articles
//   dataSource!: MatTableDataSource<Url>;
//   displayedColumns: string[] = ['url', 'actions'];
//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) { }

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       if (params['articles']) {
//         this.articles = JSON.parse(params['articles']);
//         this.dataSource = new MatTableDataSource(this.articles);
//         this.loadArticles(); // Load the articles after initializing the data source
//       }
//     });
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }

//   viewUrlDetails(url: Url) {
//     // Navigate to the UrlDetailsComponent with the selected article
//     this.router.navigate(['/url-details', url.loc]);
//   }

//   deleteUrl(url: Url) {
//     // Implement the logic to delete the selected URL
//     console.log('Delete URL:', url);

//     // Call the deleteArticle method from the ArticleService
//     this.articleService.deleteArticle(url.loc).subscribe(
//       (response: string) => {
//         console.log('URL deleted successfully:', response);
//         this.loadArticles(); // Reload the articles after deleting
//       },
//       (error: any) => {
//         console.error('Failed to delete URL:', error);
//       }
//     );
//   }

//   loadArticles() {
//     const startIndex = (this.currentPage - 1) * this.pageSize;
//     this.totalItems = this.articles.length;
//     this.dataSource.data = this.articles.slice(startIndex, startIndex + this.pageSize);
//   }
  
// }
// import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ArticleService } from '../services/article.service';
// import { Url } from '../models/url.model';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-url-list',
//   templateUrl: './url-list.component.html',
//   styleUrls: ['./url-list.component.css']
// })
// export class UrlListComponent implements OnInit, AfterViewInit {
//   channelName: string = ''; // Selected channel name
//   articles: Url[] = [];
//   pageSize: number = 10; // Number of articles per page
//   currentPage: number = 0; // Current page (0-based index)
//   totalItems: number = 0; // Total number of articles
//   dataSource!: MatTableDataSource<Url>;
//   displayedColumns: string[] = ['url', 'actions'];
//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) {}

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       if (params['channelName']) {
//         this.channelName = params['channelName'];
//         this.loadArticles();
//       }
//     });
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }

//   viewUrlDetails(url: Url) {
//     this.router.navigate(['/url-details', url.loc]);
//   }

//   deleteUrl(url: Url) {
//     console.log('Delete URL:', url);

//     this.articleService.deleteArticle(url.loc).subscribe(
//       (response: string) => {
//         console.log('URL deleted successfully:', response);
//         this.loadArticles();
//       },
//       (error: any) => {
//         console.error('Failed to delete URL:', error);
//       }
//     );
//   }

//   loadArticles() {
//     this.currentPage = 0; // Reset current page when loading new articles
//     const startIndex = this.currentPage * this.pageSize;
//     this.articleService.getAllArticlesByChannel(this.channelName).subscribe(
//       (articles: Url[]) => {
//         this.articles = articles;
//         this.totalItems = this.articles.length;
//         this.dataSource = new MatTableDataSource(this.articles.slice(startIndex, startIndex + this.pageSize));
//       },
//       (error: any) => {
//         console.error('Failed to load articles:', error);
//       }
//     );
//   }

//   handlePageChange(event: any) {
//     this.currentPage = event.pageIndex;
//     const startIndex = this.currentPage * this.pageSize;
//     this.dataSource.data = this.articles.slice(startIndex, startIndex + this.pageSize);
//   }
// }

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit, AfterViewInit {
  channelName: string = ''; // Selected channel name
  articles: Url[] = [];
  pageSize: number = 10; // Number of articles per page
  currentPage: number = 0; // Current page (0-based index)
  totalItems: number = 0; // Total number of articles
  dataSource!: MatTableDataSource<Url>;
  displayedColumns: string[] = ['thumbnail', 'title', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['channelName']) {
        this.channelName = params['channelName'];
        this.loadArticles();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewUrlDetails(url: Url) {
    this.router.navigate(['/url-details', url.loc]);
  }

  deleteUrl(url: Url) {
    console.log('Delete URL:', url);

    this.articleService.deleteArticle(url.loc).subscribe(
      (response: string) => {
        console.log('URL deleted successfully:', response);
        this.loadArticles();
      },
      (error: any) => {
        console.error('Failed to delete URL:', error);
      }
    );
  }

  moreDetails(url: Url) {
    window.open(url.loc, '_blank');
  }  

  loadArticles() {
    this.currentPage = 0; // Reset current page when loading new articles
    const startIndex = this.currentPage * this.pageSize;
    this.articleService.getAllArticlesByChannel(this.channelName).subscribe(
      (articles: Url[]) => {
        this.articles = articles;
        this.totalItems = this.articles.length;
        this.dataSource = new MatTableDataSource(this.articles.slice(startIndex, startIndex + this.pageSize));
      },
      (error: any) => {
        console.error('Failed to load articles:', error);
      }
    );
  }

  handlePageChange(event: any) {
    this.currentPage = event.pageIndex;
    const startIndex = this.currentPage * this.pageSize;
    this.dataSource.data = this.articles.slice(startIndex, startIndex + this.pageSize);
  }
}
