import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather: any
  weatherTemp: any;
  windSpeed: any
  cityName: string = 'Lahore'
  constructor(public httpClient: HttpClient) {
    this.loadData(this.cityName)
  }

  loadData(cityName: any) {
    this.httpClient.get(`${API_URL}/weather?q=${cityName}&mode=json&units=metric&appid=${API_KEY}`).subscribe((results: any) => {
      console.log(results);
      this.weather = results
      console.log(this.weather);
      this.weatherTemp = results['main'];
      this.windSpeed = results['wind'];
      // console.log(this.windSpeed);
    })
  }

  onSubmit() {
    this.loadData(this.cityName)
    this.cityName = ''

  }

}



  // constructor(private weatherService: WeatherService) {


  // }
  // ngOnInit(): void {

  //   // this.weatherService.getWeatherData('landon')

  // }




