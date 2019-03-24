import { Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesCreateComponent } from './create/courses-create.component';
import { CoursesListComponent } from './list/courses-list.component';

export const CoursesRoutes: Routes = [{
    path: 'courses',
    component: CoursesComponent,
    children: [
        { path: '', component: CoursesListComponent },
        { path: 'create', component: CoursesCreateComponent }
        //{ path: ':courseId', component: ViewComponent },
        //{ path: ':courseId/edit', component: EditComponent }
    ],
}];