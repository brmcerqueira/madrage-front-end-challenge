import { Component } from '@angular/core';
import { FeedService } from '../feed.service';
import { PostDto } from '../dto/post.dto';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageDialogComponent } from './upload-image-dialog/upload-image-dialog.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent{

  constructor(private dialog: MatDialog, private feedService: FeedService) {

    
  }

  get data(): PostDto[] {
    return this.feedService.data;
  }

  uploadImageDialog(): void {
    this.dialog.open(UploadImageDialogComponent, {
      width: '250px'
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}