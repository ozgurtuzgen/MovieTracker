/**
 * Created by ozgur.tuzgen on 26.01.2016.
 */

import {Component} from "angular2/core";
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:`
    <h1>Component Router</h1>
    <router-outlet></router-outlet>`
})
export class AppComponent{

}