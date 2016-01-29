/**
 * Created by ozgur.tuzgen on 28.01.2016.
 */
import {Component,OnInit} from "angular2/core";
import {MovieService} from "./movie.service";
import {Movie} from "./movie";
@Component({
    selector: 'coz-Top250',
    providers: [MovieService],
    template: `
    <h1>Top 250 Movies</h1>
        <ul>
          <li *ngFor="#movie of top250Movie">
            <span>{{movie.id}}</span> {{movie.name}}
          </li>
        </ul>
    `
})
export class Top250Component implements OnInit {

    public top250Movie:Movie[];

    constructor(private _movieService:MovieService) {

    }

    ngOnInit():any {
        this._movieService.getMockTop250Movies().then(result=> this.top250Movie = result);
    }
}
