import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url.model';
import { Sitemap } from '../models/sitemap.model';
import { UrlRequest } from '../models/url-request.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http://localhost:8080/api/app';

  constructor(private http: HttpClient) {}

  //doar la search
  getArticle(loc: string): Observable<Url> {
    return this.http.get<Url>(`${this.baseUrl}/getArticle?loc=${loc}`);
  }

  addArticle(article: UrlRequest): Observable<Url> {
    return this.http.post<Url>(`${this.baseUrl}/addArticle`, article);
  }

  //doar la search
  updateArticle(article: Url): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/updateArticle`, article);
  }

  //doar la search
  deleteArticle(loc: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteArticle?loc=${loc}`);
  }

  getAllArticlesByChannel(channelName: string): Observable<Url[]> {
    return this.http.get<Url[]>(
      `${this.baseUrl}/getAllArticlesByChannel/${channelName}`,
    );
  }

  //la channel list
  addArticleToChannel(
    channelName: string,
    article: UrlRequest,
  ): Observable<Url> {
    return this.http.post<Url>(
      `${this.baseUrl}/addArticleToChannel?channelName=${channelName}`,
      article,
    );
  }

  // la channel list
  updateArticleInChannel(
    channelName: string,
    article: Url,
  ): Observable<string> {
    return this.http.put<string>(
      `${this.baseUrl}/updateArticleInChannel?channelName=${channelName}`,
      article,
    );
  }

  // la channel list
  deleteArticleFromChannel(
    channelName: string,
    loc: string,
  ): Observable<string> {
    return this.http.delete<string>(
      `${this.baseUrl}/deleteArticleFromChannel?channelName=${channelName}&loc=${loc}`,
    );
  }

  getAllChannelNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/channelNames`);
  }

  getSitemapNews(): Observable<Sitemap[]> {
    return this.http.get<Sitemap[]>(`${this.baseUrl}/getSitemapNews`);
  }

  //folosind un sitemap ceva cred in channel list care no sa mai fie channel list
  // getUrlNews(): Observable<Url[]> {
  //   return this.http.get<Url[]>(`${this.baseUrl}/getUrlNews`);
  // }

  // getUrlNews(sitemapName: string): Observable<Url[]> {
  //   return this.http.get<Url[]>(`${this.baseUrl}/getUrlNews/${sitemapName}`);
  // }  

  getUrlNews(sitemapName: string): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getUrlNews`, { params: { sitemapName } });
  }

  getAllUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(`${this.baseUrl}/getAllUrls`);
  }

  countUrlsByChannel(channelName: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/countUrlsByChannel?channelName=${channelName}`,
    );
  }

  latestArticleByChannel(channelName: string): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(
      `${this.baseUrl}/latestArticleByChannel?channelName=${channelName}`,
    );
  }

  triggerSitemapNewsMapping(): Observable<string> {
    return this.http.post<string>(
      `${this.baseUrl}/triggerSitemapNewsMapping`,
      {},
    );
  }
}
