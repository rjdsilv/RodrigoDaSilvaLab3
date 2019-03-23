import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../courses.service';

@Component({
    selector: 'create',
    templateUrl: 'app/courses/create/courses-create.template.html'
})
export class CoursesCreateComponent {
    course: any = {};
    errorMessage: string = '';
    constructor(private _router: Router, private _coursesService: CoursesService) { }

    create() {
        this._coursesService
            .create(this.course)
            .subscribe(
                createdCourse => {
                    console.log('SUCCESS ' + JSON.stringify(createdCourse));
                    this._router.navigate(['/courses', createdCourse._id]);
                },
                error => {
                    console.log('ERRROR ' + JSON.stringify(error));
                    this.errorMessage = error
                }
            );
    }

    hasError() {
        return this.errorMessage.length > 0
    }
}
