import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Account } from './account';


@Component({
    selector: 'account-view',
    templateUrl: './account.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AccountComponent {
    name = 'Jane Doe';
    account: Account[];

    constructor(private http: Http) { }

}


