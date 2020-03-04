import { UserDto } from './user.dto';

export type CommentDto = {
    who: UserDto;
    dateTime: Date;
};
