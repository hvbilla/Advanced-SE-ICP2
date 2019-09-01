import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

import moment, * as moments from 'moment';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  state = 'IN';
  city = 'Avanigadda';

  foreCastData;
  fiveHrsData = [];
  todayWeather;
  dataLoaded = false;
  errorCard = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeatherDetails() {

    this.dataLoaded = false;
    this.errorCard = false;

    let obj = {
      state: this.state,
      city: this.city
    }
    console.log(obj);

    this.weatherService.getHourlyForecast(obj).subscribe(data => {

      console.log('hr data', data)
      let hrsData = data["list"].slice(data["list"].length - 5, data["list"].length)

      hrsData.forEach(function (value) {
        value["displayTime"] = moment(value.dt_txt).format("HH:mm A")
        value['iconUrl'] = 'https://openweathermap.org/img/w/' + value.weather[0].icon + '.png'
      })
      this.fiveHrsData = hrsData
    }, error => {
      this.errorCard = true;
    });

    this.weatherService.getcurrentWeather(obj).subscribe(data => {
      console.log(data);
      this.dataLoaded = true;
      this.todayWeather = data;
      this.todayWeather["date"] = moment.unix(data["dt"]).format("DD MMM YYYY hh:mm A");
    }, error => {
      this.errorCard = true;
    });
  }

  getIconImageUrl(icon) {
    return 'https://openweathermap.org/img/w/' + icon + '.png'
  }

}