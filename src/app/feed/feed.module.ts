import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
    {
      path: '',
      component: FeedComponent
    }
];

@NgModule({
    declarations: [FeedComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class FeedModule { 
    constructor() {
        import('../shopping/shopping.module').then(m => m.ShoppingModule);    
    }
}