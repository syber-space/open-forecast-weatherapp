import {WeatherService} from './weather/weather.service';
import {Component, OnInit} from '@angular/core';

/**
 * The main AppComponent in which the app bootstraps
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [WeatherService]
})
export class AppComponent implements OnInit {
    cityName: any;
    /**
     * weather forecast data
     * @type {string[]}
     */
    weatherForecastData: string[];
    searchText: any;

    /**
     * Error message for api callback
     * @type {*}
     */
    errorMessage: any;

    /**
     * User location for api callback
     * @type {*}
     */
    userLocation: any;


    /**
     * Creates an instance of AppComponent.
     * @param {WeatherService} _weatherService_ weatherservice injectable
     */
    constructor(private _weatherService_: WeatherService) {
    }

    /**
     * Initialize component
     */
    ngOnInit() {
        this.getWeather('?q=london&appid=78c6b64f54db08d8254473fd536c3bf6&units=metric');
        this.getLocation();

    }

    /**
     * Call weatherforecast api using injectable service
     */
    getWeather(location) {
        this._weatherService_.getWeatherForecast(location).subscribe(
            data => {
                this.weatherForecastData = data[0];
                this.cityName = data[1];
                this.searchText = data[1];
                this.errorMessage = '';
                console.log(this.cityName);
            },
            err => {
                this.errorMessage = <any>err;


            }
        );
    }


    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.getWeather(
                    `?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=78c6b64f54db08d8254473fd536c3bf6&units=metric`);
            }, () => {
                this.getWeather('?q=london&appid=78c6b64f54db08d8254473fd536c3bf6&units=metric');
            });
        } else {
            this.getWeather('?q=london&appid=78c6b64f54db08d8254473fd536c3bf6&units=metric');
        }
    }

    searchByCity() {
        // console.log();
        this.getWeather(`?q=${this.searchText}&appid=78c6b64f54db08d8254473fd536c3bf6&units=metric`);


    }


}
