import {Injectable} from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

/**
 * Service for fetching weather forecast data from Openweathermap API
 */
@Injectable()
export class WeatherService {
    /**
     * Creates an instance of WeatherService.
     * @param {Http} http HttpModule
     */
    constructor(private http: Http) {
    }

    /**
     * Call openweathermap api
     *
     * @returns {Observable<any[]>} the http promise
     */


    getWeatherForecast(location): Observable<any[]> {
        return this.http
            .get(
                environment.baseUrl +
                location
            ).pipe(
                map(response => this.extractData(response)),
                catchError(this.handleError)
            )
    }

    /**
     * Callback function for catching AJAX call error
     *
     * @param {any} error error object
     * @returns throws error message
     */
    private handleError(error: any) {
        let errMsg: string;
        errMsg = error.message ? error.message : error.toString();
        console.log(errMsg)
        return Observable.throw(errMsg);
    }

    /**
     * Group openweathermap api response to date
     *
     * @param {any} arr array to group
     * @param {string} key key to group
     * @returns {any} datewise grouped array
     */
    private groupBy(arr: any, key: string) {
        return arr.reduce((rv, x) => {
            const cDate = new Date(x[key] * 1000);
            const monthFormat = `${cDate.getMonth() +
            1}/${cDate.getDate()}/${cDate.getFullYear()}`;
            (rv[monthFormat] = rv[monthFormat] || []).push(x);
            return rv;
        }, {});
    }

    /**
     * Extract 5 days weatherforecast grouped by date
     *
     * @param {any} res openweathermap api response object
     * @returns {any} grouped forecast array for 5 days
     */
    private extractData(res: any): any {
        let body = res.json();
        const cityName = body.city.name;
        body = body.list || {};
        body = this.groupBy(body, 'dt');
        // body = Object.values(body);
        body = Object.keys(body).map(itm => body[itm]);

        return [body.slice(0, 5), cityName];
    }


}
