import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping.component';

@NgModule({
    declarations: [ShoppingComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ShoppingModule { }