import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'my-alert',
    templateUrl: 'my-alert.component.html'
})

export class MyAlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}