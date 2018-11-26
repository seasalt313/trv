import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Home } from './home';
import { Bookhotel } from './bookhotel';
import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./app.component.scss'],
})
export class HomeComponent {
    user = 'Jane Doe';
    home: Home[];

    constructor(private http: Http) { }

}


