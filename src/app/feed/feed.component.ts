import { Component } from '@angular/core';
import { FeedService } from '../feed.service';
import { PostDto } from '../dto/post.dto';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent{

  constructor(private feedService: FeedService) {

    
  }

  get data(): PostDto[] {
    return this.feedService.data;
  }
}