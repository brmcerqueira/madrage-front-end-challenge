import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimePassedPipe } from './time-passed.pipe';
import { UploadImageDialogComponent } from './upload-image-dialog/upload-image-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgVarDirective } from './ng-var.directive';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
    {
      path: '',
      component: FeedComponent
    }
];

@NgModule({
    declarations: [FeedComponent, TimePassedPipe, UploadImageDialogComponent, NgVarDirective, CommentComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        ImageCropperModule
    ],
    providers: [DatePipe]
})
export class FeedModule { }