import {Component} from 'angular2/core';
import {BeveragesComponent} from './beverages.component';
import {BrandsComponent} from "./brands.components";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Tutorial</h1><beverages></beverages>
        <brands></brands>
    `,
    directives: [BeveragesComponent, BrandsComponent]
})
export class AppComponent { }