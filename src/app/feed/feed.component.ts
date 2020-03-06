import { Component } from '@angular/core';
import { FeedService } from '../feed.service';
import { PostDto } from '../dto/post.dto';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageDialogComponent } from './upload-image-dialog/upload-image-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent{

  public whatThinkingForm: FormGroup;
  private _image: string;

  constructor(private formBuilder: FormBuilder, 
    private dialog: MatDialog, 
    private feedService: FeedService) {

    this.whatThinkingForm = this.formBuilder.group({
      text: [null, Validators.required]
    });

    this._image = null;

    this.feedService.loadData();
  }

  get data(): PostDto[] {
    return this.feedService.data;
  }

  uploadImageDialog(): void {
    this.dialog.open(UploadImageDialogComponent, {
      width: '60em',
      height: '38em',
    }).afterClosed().subscribe(result => this._image = result);
  }

  send(): void {
    this.feedService.create({
      id: null,
      who: {
        avatar: "./assets/user.jpeg",
        name: "Bruno Cerqueira"
      },
      dateTime: new Date(),
      text: this.whatThinkingForm.controls.text.value,
      image: this._image,
      iLike: false,
      likes: 0,
      shared: 0,  
      comments: []
    }).subscribe(() => this.feedService.loadData());
  }

  iLikeIt(dto: PostDto): void {
    dto.iLike = !dto.iLike;
    dto.likes += dto.iLike ? 1 : -1;
    this.feedService.update(dto).subscribe();
  }
}