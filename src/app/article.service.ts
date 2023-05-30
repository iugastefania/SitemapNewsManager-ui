import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './url.model';

@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {

    constructor(private http: HttpClient) { }

    private baseUrl = 'http://localhost:8080'; // Update with your server URL

  
    // getAllArticlesByChannel(channelName: string): Observable<Url[]> {
    //     return this.http.get<Url[]>(`http://localhost:8080/getAllArticlesByChannel/${channelName}`, { responseType: 'json' });
    //   }
  
    addArticleToChannel(channelName: string, article: Url): Observable<string> {
      return this.http.post<string>(`http://localhost:8080/addArticleToChannel?channelName=${channelName}`, article);
    }
  
    updateArticleInChannel(channelName: string, article: Url): Observable<string> {
      return this.http.put<string>(`http://localhost:8080/updateArticleInChannel?channelName=${channelName}`, article);
    }
  
    deleteArticleFromChannel(channelName: string, loc: string): Observable<string> {
      return this.http.delete<string>(`http://localhost:8080/deleteArticleFromChannel?channelName=${channelName}&loc=${loc}`);
    }

    getAllChannelNames(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/channelNames`);
    }

    getAllArticlesByChannel(channelName: string): Observable<Url[]> {
      const url = `${this.baseUrl}/getAllArticlesByChannel/${channelName}`;
      return this.http.get<Url[]>(url);
    }
    
  }
  
  