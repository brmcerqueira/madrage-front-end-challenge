import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectComponent } from './direct.component';

@NgModule({
    declarations: [DirectComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DirectModule { }