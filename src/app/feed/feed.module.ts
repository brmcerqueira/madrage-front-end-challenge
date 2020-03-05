import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimePassedPipe } from './time-passed.pipe';

const routes: Routes = [
    {
      path: '',
      component: FeedComponent
    }
];

@NgModule({
    declarations: [FeedComponent, TimePassedPipe],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule
    ],
    providers: [DatePipe]
})
export class FeedModule { }