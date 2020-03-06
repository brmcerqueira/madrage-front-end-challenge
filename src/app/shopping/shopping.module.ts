import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ShoppingComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule
    ]
})
export class ShoppingModule { }