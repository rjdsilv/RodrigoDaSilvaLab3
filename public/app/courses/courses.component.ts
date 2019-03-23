import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from './courses.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses/courses.template.html',
    providers: [CoursesService]
})
export class CoursesComponent {
    student: any;
    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
        this.student = this._authenticationService.student;

        if (!this.student) {
            this._router.navigate(['/authentication/signin']);
        }
    }
}
