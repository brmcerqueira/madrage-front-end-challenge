import { Component } from '@angular/core';
import { FeedService } from '../feed.service';
import { PostDto } from '../dto/post.dto';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageDialogComponent } from './upload-image-dialog/upload-image-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';

type CommentMetadataDto = { 
  show: boolean
}

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
    private userService: UserService, 
    private feedService: FeedService) {

    this.whatThinkingForm = this.formBuilder.group({
      text: [null, Validators.required]
    });

    this._image = null;

    this.feedService.loadData();
  }

  public get user(): UserDto {
    return this.userService.current;
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
      who: this.userService.current,
      dateTime: new Date(),
      text: this.whatThinkingForm.controls.text.value,
      image: this._image,
      iLike: false,
      likes: 0,
      shared: 0,  
      comments: []
    }).subscribe(() => {
      this.whatThinkingForm.reset();
      this.feedService.loadData()
    });
  }

  iLikeIt(dto: PostDto): void {
    dto.iLike = !dto.iLike;
    dto.likes += dto.iLike ? 1 : -1;
    this.feedService.update(dto).subscribe();
  }

  share(dto: PostDto): void {
    dto.shared += 1;
    this.feedService.update(dto).subscribe();
  }

  showOrHideComments(dto: CommentMetadataDto): void {
    dto.show = !dto.show;
  }
}