import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('directContainer', { read: ViewContainerRef })
  private directViewContainerRef: ViewContainerRef;

  @ViewChild('shoppingContainer', { read: ViewContainerRef })
  private shoppingViewContainerRef: ViewContainerRef;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver, 
    private userService: UserService) { 
  }

  public get user(): UserDto {
    return this.userService.current;
  }

  ngOnInit(): void {
    import('./direct/direct.module')
    .then(() => import('./direct/direct.component'))
    .then(({ DirectComponent }) => {
      this.directViewContainerRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(DirectComponent));
    });
    import('./shopping/shopping.module')
    .then(() => import('./shopping/shopping.component'))
    .then(({ ShoppingComponent }) => {
      this.shoppingViewContainerRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(ShoppingComponent));
    });
  }
}
