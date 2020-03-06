import { Injectable } from '@angular/core';
import { UserDto } from './dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  public get current(): UserDto {
    return {
      avatar: "./assets/user.jpeg",
      name: "Bruno Cerqueira"
    };
  }
}
