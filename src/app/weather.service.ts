import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }


  getHourlyForecast(location) {
    //const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  

    // let uri = 'https://samples.openweathermap.org/data/2.5/forecast/hourly?q=' + location.city + ',' + location.state + '&appid=b6907d289e10d714a6e88b30761fae22';
    let uri = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + location.city + ',' + location.state + '&appid=d5305e2bed664b6d784798dbf34043b8&units=imperial&cnt=10';
    return this.http.get(uri);

    //return this.http.jsonp(uri, 'callback');


  }

  getcurrentWeather(location) {
    //let uri = 'https://samples.openweathermap.org/data/2.5/weather?q=' + location.city + ',' + location.state + '&appid=b6907d289e10d714a6e88b30761fae22';
    let uri = 'https://api.openweathermap.org/data/2.5/weather?q=' + location.city + ',' + location.state + '&appid=d5305e2bed664b6d784798dbf34043b8&units=imperial&cnt=10';
    return this.http.get(uri)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error);
  }

}