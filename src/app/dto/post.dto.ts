import { UserDto } from './user.dto';
import { CommentDto } from './comment.dto';

export type PostDto = {
    who: UserDto,
    dateTime: Date,
    related: UserDto[],
    text: string,
    images: string[],
    iLike: boolean,
    likes: number,
    shared: number,
    comments: CommentDto[]
};

