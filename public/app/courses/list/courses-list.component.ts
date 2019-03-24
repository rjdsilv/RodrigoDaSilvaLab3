import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/courses-list.template.html'
})
export class CoursesListComponent {
    courses: any;
    errorMessage: string = '';

    constructor(private _coursesService: CoursesService, private _router: Router) { }

    ngOnInit() {
        this._coursesService.list().subscribe(courses => this.courses = courses);
    }

    delete(courseId) {
        console.log("ID" + courseId);
        this._coursesService.delete(courseId).subscribe(
            deletedCourse => {
                console.log("DELETED = " + JSON.stringify(deletedCourse));
                this.courses = this.courses.filter((course) => course._id != deletedCourse._id);
            },
            error => {
                this.errorMessage = error;
            }
        );
    }

    hasError() {
        return this.errorMessage.length > 0
    }
}

