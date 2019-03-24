import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesRoutes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CoursesCreateComponent } from './create/courses-create.component';
import { CoursesListComponent } from './list/courses-list.component';
import { CoursesEditComponent } from './edit/courses-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(CoursesRoutes),
    ],
    declarations: [
        CoursesComponent,
        CoursesCreateComponent,
        CoursesListComponent,
        CoursesEditComponent
    ]
})
export class CoursesModule { }
