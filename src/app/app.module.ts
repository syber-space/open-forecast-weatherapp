import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {WeatherListComponent} from './weather/weather-list/weather-list.component';
import {MyDatePipe} from './my-date.pipe';
import {FormsModule} from '@angular/forms';
import { DateXPipe } from './date-x.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        WeatherListComponent,
        MyDatePipe,
        DateXPipe
    ],
    imports: [
        BrowserModule, HttpModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
