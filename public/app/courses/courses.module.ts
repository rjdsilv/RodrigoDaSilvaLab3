import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesRoutes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CoursesCreateComponent } from './create/courses-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(CoursesRoutes),
    ],
    declarations: [
        CoursesComponent,
        CoursesCreateComponent
    ]
})
export class CoursesModule { }
