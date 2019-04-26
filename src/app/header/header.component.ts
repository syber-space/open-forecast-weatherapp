import {Component, Input} from '@angular/core';

/**
 * HeaderComponent for rendering app header
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    /**
     * Input binding for city name and Application title
     * @type {*}
     */
    @Input() cityName;

    /**
     * Creates an instance of HeaderComponent.
     */
    constructor() {
    }
}
