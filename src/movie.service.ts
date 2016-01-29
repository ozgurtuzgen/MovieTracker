/**
 * Created by ozgur.tuzgen on 28.01.2016.
 */
import {Injectable} from "angular2/core";
import {MOVIELIST} from "./mock-movies";
import {Http} from "angular2/http";

@Injectable()
export class MovieService {

    private _http:Http;

    constructor(http:Http) {
        this._http = http;
    }

    getMockTop250Movies() {
        return Promise.resolve(MOVIELIST);
    }

    getMovie() {
        this._http.get("http://rest-service.guides.spring.io/greeting").map(result=> {

            console.log(result.json());
            var temp = result;

        });
    }

    public get(url:string) {
        return this._http.get(url).map(res => {
            console.log(res.json());
            return res.json();
        }).toPromise();
    }
}