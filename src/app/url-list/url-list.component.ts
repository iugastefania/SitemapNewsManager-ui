import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from '../url.model';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
  articles: Url[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['articles']) {
        this.articles = JSON.parse(params['articles']);
      }
    });
  }
}
