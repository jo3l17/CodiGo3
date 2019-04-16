import {Component} from '@angular/core';
import {Hero} from './../../models/hero';
import {HEROES} from './../../seeders/seeder-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls:['./heroes.component.css']
})

export class HeroesComponent{
    /*//public heroe:Hero = new Hero();
    public objHero:Hero = {
        id:1,
        name:"Batman"
    }
    /*constructor(){
        this.heroe.id = 1;
        this.heroe.name = "Batman";
    }*/
    // public heroe:stirng = 'Batman';*/
    public arrHeroes:Array<Hero> = HEROES;
    public onSelect(selectedHero):void{
        console.log(selectedHero)
    }
}