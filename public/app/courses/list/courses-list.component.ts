import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/courses-list.template.html'
})
export class CoursesListComponent {
    courses: any;

    constructor(private _coursesService: CoursesService) { }

    ngOnInit() {
        this._coursesService.list().subscribe(courses => this.courses = courses);
    }
}

