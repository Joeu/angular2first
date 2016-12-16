import {Component} from 'angular2/core'
import {BrandService} from './brands.service'

@Component({
    selector: 'brands',
    template: `
        <h2>Brands</h2>
        {{ title }}
        <ul>
            <li *ngFor="#brand of brands">
                {{ brand }}
            </li>
        </ul>
        `,
    providers: [BrandService]
})
export class BrandsComponent{
    title = "Here are some Brands!";
    brands;

    constructor(brandService: BrandService){
        this.brands = brandService.getBrands();
    }
}