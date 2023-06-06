import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Url } from '../models/url.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit, AfterViewInit {
  channelName: string = ''; 
  articles: Url[] = [];
  pageSize: number = 20; 
  currentPage: number = 0; 
  totalItems: number = 0; 
  dataSource!: MatTableDataSource<Url>;
  displayedColumns: string[] = ['thumbnail', 'title', 'actions'];
  selectedUrl: Url | null = null; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService, private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['channelName']) {
        this.channelName = params['channelName'];
        this.loadArticles();
      }
    });
    
    const storedUrl = localStorage.getItem('selectedUrl');
    if (storedUrl) {
      this.selectedUrl = JSON.parse(storedUrl);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loadArticles();
  }  

  viewUrlDetails(url: Url) {
    this.selectedUrl = url;
    localStorage.setItem('selectedUrl', JSON.stringify(url));
    if (this.selectedUrl === url) {
      this.router.navigate(['/url-details', url.loc]);
    }
  }

  deleteUrl(url: Url) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are you sure you want to delete this article?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Delete URL:', url);
  
        this.articleService.deleteArticle(url.loc).subscribe(
          (response: string) => {
            console.log('URL deleted successfully:', response);
            this.loadArticles();
            this.paginator.firstPage(); 
          },
          (error: any) => {
            console.error('Failed to delete URL:', error);
          }
        );
      }
    });
  }


  loadArticles() {
    this.currentPage = 0; 
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

  isEditorOrAdmin(): boolean {
    const role = this.authService.loggedUser?.role;
    return role === 'ADMINISTRATOR' || role === 'EDITOR';
  }
  
}
