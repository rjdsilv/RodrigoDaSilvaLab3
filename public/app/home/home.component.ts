import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.template.html'
})

export class HomeComponent {
    student: any;
    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
        this.student = this._authenticationService.student;
        console.log("Student = " + this.student);

        if (!this.student) {
            console.log("ENTERED");
            this._router.navigate(['/authentication/signin']);
        }
    }
}