import { UserDto } from './user.dto';
import { CommentDto } from './comment.dto';

export type PostDto = {
    id: number,
    who: UserDto,
    dateTime: Date,
    text?: string,
    image?: string,
    iLike: boolean,
    likes: number,
    shared: number,
    comments: CommentDto[]
};