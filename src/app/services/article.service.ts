import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url.model';
import { Sitemap } from '../models/sitemap.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080'; 


  getAllUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getAllUrls`);
  }
  
  getArticle(loc: string): Observable<Url> {
    return this.http.get<Url>(`${this.baseUrl}/getArticle?loc=${loc}`);
  }

  addArticle(article: Url): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/addArticle`, article);
  }

  updateArticle(article: Url): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateArticle`, article);
  }

  deleteArticle(loc: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteArticle`, { body: loc });
  }

  addArticleToChannel(channelName: string, article: Url): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/addArticleToChannel?channelName=${channelName}`, article);
  }

  updateArticleInChannel(channelName: string, article: Url): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateArticleInChannel?channelName=${channelName}`, article);
  }

  deleteArticleFromChannel(channelName: string, loc: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteArticleFromChannel?channelName=${channelName}&loc=${loc}`);
  }

  getAllChannelNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/channelNames`);
  }

  getAllArticlesByChannel(channelName: string): Observable<Url[]> {
    const url = `${this.baseUrl}/getAllArticlesByChannel/${channelName}`;
    return this.http.get<Url[]>(url);
  }

  countUrlsByChannel(channelName: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countUrlsByChannel?channelName=${channelName}`);
  }

  latestArticleByChannel(channelName: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/latestArticleByChannel?channelName=${channelName}`);
  }

  getSitemapNews(): Observable<Sitemap[]> {
    return this.http.get<Sitemap[]>(`${this.baseUrl}/getSitemapNews`);
  }

  getUrlNews(): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getUrlNews`);
  }  
}

