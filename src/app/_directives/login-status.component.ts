import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login-status',
    templateUrl: 'login-status.component.html'
})

export class LoginStatusComponent {
    loggedUser: any;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
        this.authenticationService.onStatusChange().subscribe(user => this.loggedUser = user);
    }
}