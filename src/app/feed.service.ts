import { Injectable } from '@angular/core';
import { PostDto } from './dto/post.dto';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _data: PostDto[];

  constructor() { 
    this._data = [];
  }

  public get data(): PostDto[] {
    return this._data;
  }
}