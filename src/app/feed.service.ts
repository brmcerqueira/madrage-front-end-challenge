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
    this.http.get<PostDto[]>(FeedService.uri("posts?_sort=dateTime&_order=desc")).subscribe(results => {
      results.forEach(i => this._data.push(i));
    });
  }

  public create(dto: PostDto): Observable<any> {
    return this.http.post(FeedService.uri("posts"), dto);
  }

  public update(dto: PostDto): Observable<any> {
    return this.http.put(FeedService.uri(`posts/${dto.id}`), dto);
  }
}