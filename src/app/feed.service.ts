import { Injectable } from '@angular/core';
import { PostDto } from './dto/post.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _data: PostDto[];

  constructor(private http: HttpClient) { 
    this._data = [];
    this.http.get<PostDto[]>(FeedService.uri("posts")).subscribe(results => {
      results.forEach(i => this._data.push(i));
    });
  }

  private static uri(path: string): string {
    return `http://localhost:3000/${path}`;
  }

  public get data(): PostDto[] {
    return this._data;
  }
}