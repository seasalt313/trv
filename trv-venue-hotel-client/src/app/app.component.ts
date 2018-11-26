import { Component } from '@angular/core';
import { Bookhotel } from './bookhotel';
import { Http } from '@angular/http';

@Component({
  selector: 'hotel-view',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class BookHotelComponent {
  apiURL = 'http://localhost/3000/hotels'
  // country = this.country;
  // city = this.city;
  bookhotelList: Bookhotel[];

  constructor(private http: Http) { }

  getBookhotelData(term) {
    // city = city.charAt(0).toUpperCase() + city.slice(1);
    // country = country.charAt(0).toUpperCase() + country.slice(1);

    // this.http.get('http://localhost:3000/hotels?country=' + country + '?&city=' + city)
    this.http.get('http://localhost:3000/hotels?' + term)
      .subscribe(res => this.bookhotelList =
        res.json() as Bookhotel[]);

    event.preventDefault()
    console.log(this);
  }
}


