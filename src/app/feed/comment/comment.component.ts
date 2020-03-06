import { Component, Input } from '@angular/core';
import { PostDto } from '../../dto/post.dto';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FeedService } from 'src/app/feed.service';
import { UserService } from 'src/app/user.service';
import { UserDto } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  public postDto: PostDto;
  public commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private feedService: FeedService) { 
    this.commentForm = this.formBuilder.group({
      text: [null, Validators.required]
    });
  }

  public get user(): UserDto {
    return this.userService.current;
  }

  send(): void {
    this.postDto.comments.push({
      who: this.userService.current,
      dateTime: new Date(),
      text: this.commentForm.controls.text.value 
    });
    this.commentForm.reset();
    this.feedService.update(this.postDto).subscribe();
  }
}
