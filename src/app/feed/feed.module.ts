import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';

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
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule
    ]
})
export class FeedModule { }