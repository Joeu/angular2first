import {Component} from 'angular2/core'
import {BeverageService} from './beverages.service'
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'beverages',
    template: `
        <h2>Beverages</h2>
        {{ title }}
        <input type="text" autoGrow/>
        <ul>
            <li *ngFor="#beverage of beverages">
                {{ beverage }}
            </li>
        </ul>
        `,
    providers: [BeverageService],
    directives: [AutoGrowDirective]
})
export class BeveragesComponent{
    title = "Drink some Beer!";
    beverages;

    constructor(beverageService: BeverageService){
        this.beverages = beverageService.getBeverages();
    }
}