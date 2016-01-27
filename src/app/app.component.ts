import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {GridOptions,GridColumn} from './ng2-bootstrap-grid/gridOptions';
import {PersonData} from './person'
import {BsGridComponent} from './ng2-bootstrap-grid/ng2-bootstrap-grid';
import {HeroService} from './hero.service';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/my-app.html',
    styleUrls:['app/app.css'],
    directives: [HeroDetailComponent,  BsGridComponent, ROUTER_DIRECTIVES],
    providers: [HeroService]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    public gridOptions = new GridOptions(true, [new GridColumn('ID','id'),new GridColumn('Name','name')], [new PersonData('1','Coral')]);

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}
