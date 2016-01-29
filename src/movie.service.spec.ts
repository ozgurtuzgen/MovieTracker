///**
// * Created by ozgur.tuzgen on 29.01.2016.
// */
//import {Movie} from "./movie";
//import {beforeEachProviders,injectAsync} from "angular2/testing";
//import {MovieService} from "./movie.service";
//import {HTTP_PROVIDERS} from "angular2/http";
//
//describe("App Tests", ()=>{
//    it('Movie Service', () =>
//    {
//        expect(true).toEqual(true);
//    });
//});
//
//export function main() {
//    describe('RestClient Service', () => {
//        beforeEachProviders(() => [HTTP_PROVIDERS, MovieService]);
//        it('is defined', injectAsync([MovieService], (client:MovieService) => {
//            return client.get('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
//                console.log('ciaccia');
//                expect(res.length).toBeGreaterThan(3);
//            });
//            done();
//        }));
//    });
//}


import {
    describe,
    expect,
    it,
    injectAsync,
    beforeEachProviders
} from 'angular2/testing';
import {MovieService} from './movie.service';
import {
    HTTP_PROVIDERS
} from 'angular2/http';

export function main() {
    describe('RestClient Service', () => {
        beforeEachProviders( () => [HTTP_PROVIDERS, MovieService] );
        it('is defined', injectAsync( [MovieService], (client: MovieService) => {
            return client.get('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
                console.log('ciaccia');
                expect(res.length).toBeGreaterThan(3);
            });
        }));
    });
}