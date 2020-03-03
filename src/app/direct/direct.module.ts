import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectComponent } from './direct.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [DirectComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule
    ]
})
export class DirectModule { }