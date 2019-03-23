import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/authentication/signup/signup.template.html'
})
export class SignupComponent {
    errorMessage: string = '';
    student: any = {};

    constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

    signup() {
        console.log('Student: ' + JSON.stringify(this.student));
        this._authenticationService
            .signup(this.student)
            .subscribe(result => this._router.navigate(['/authentication/signin']), error => this.errorMessage = error);
    }

    hasError() {
        return this.errorMessage.length > 0
    }
}