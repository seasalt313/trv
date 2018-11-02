import { Component } from '@angular/core';
import { Bookhotel } from './bookhotel';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TRV Venue Hotel Search';
  hotel = [];
  apiURL = 'http://localhost/3000/hotels'

  bookhotelList: Bookhotel[];

  constructor(private http: Http) { }

  getBookhotelData() {
    this.http.get('http://localhost:3000/hotels')
      .subscribe(res => this.bookhotelList =
        res.json() as Bookhotel[]);

    console.log(this);

  }
}


