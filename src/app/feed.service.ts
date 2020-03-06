import { Injectable } from '@angular/core';
import { PostDto } from './dto/post.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private _data: PostDto[];

  constructor(private http: HttpClient) { 
    this._data = [];
  }

  private static uri(path: string): string {
    return `http://localhost:3000/${path}`;
  }

  public get data(): PostDto[] {
    return this._data;
  }

  public loadData(): void {
    this._data.length = 0;
    this.http.get<PostDto[]>(FeedService.uri("posts")).subscribe(results => {
      results.forEach(i => this._data.push(i));
    });
  }

  public send(dto: PostDto): Observable<any> {
    return this.http.post(FeedService.uri("posts"), dto);
  }
}