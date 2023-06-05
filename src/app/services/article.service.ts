import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url.model';
import { Sitemap } from '../models/sitemap.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private baseUrl = 'http://localhost:8080/api/app';

  constructor(private http: HttpClient) { }

  
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
    return this.http.delete<string>(`${this.baseUrl}/deleteArticle?loc=${loc}`);
  }

  getAllArticlesByChannel(channelName: string): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getAllArticlesByChannel/${channelName}`);
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

  getSitemapNews(): Observable<Sitemap[]> {
    return this.http.get<Sitemap[]>(`${this.baseUrl}/getSitemapNews`);
  }

  getUrlNews(): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getUrlNews`);
  }

  getAllUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getAllUrls`);
  }

  countUrlsByChannel(channelName: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countUrlsByChannel?channelName=${channelName}`);
  }

  latestArticleByChannel(channelName: string): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(`${this.baseUrl}/latestArticleByChannel?channelName=${channelName}`);
  }

  triggerSitemapNewsMapping(): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/triggerSitemapNewsMapping`, {});
  }
}
