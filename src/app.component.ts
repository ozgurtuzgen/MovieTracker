/**
 * Created by ozgur.tuzgen on 26.01.2016.
 */
import {Component} from "angular2/core";
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {Top250Component} from "./top250.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>App Center</h1>
    <nav>
     <a [routerLink]="['Top250']">Top 250</a>
     <!--<a [routerLink]="['WatchList']">Watch List</a>-->
     <!--<a [routerLink]="['Favourites']">Favourites</a>-->
    </nav>

    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/top250', name: 'Top250', component: Top250Component}
])
export class AppComponent {

}