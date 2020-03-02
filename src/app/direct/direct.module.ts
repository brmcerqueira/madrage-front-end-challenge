import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DirectComponent } from './direct.component';

const routes: Routes = [
    {
      path: '',
      component: DirectComponent
    }
];

@NgModule({
    declarations: [DirectComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DirectModule { }