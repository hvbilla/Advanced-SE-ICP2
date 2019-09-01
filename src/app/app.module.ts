import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherService } from './weather.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      { path: '', component: WeatherDetailsComponent },
    ])],
  declarations: [AppComponent, WeatherDetailsComponent],
  bootstrap: [AppComponent],
  providers: [WeatherService]
})
export class AppModule { }
