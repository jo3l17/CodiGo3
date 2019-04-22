import {Component} from '@angular/core';
import {Hero} from './../../models/hero';
import { HeroService } from './../../services/hero.service';

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
    
    
    public arrHeroes:Array<Hero>;

    public selectedHero:Hero;

    constructor(private _sHero:HeroService){
        // this.arrHeroes = this._sHero.getHeroes();
        _sHero.getHeroes().then((respuesta)=>{
            this.arrHeroes=respuesta;
        });
    }

    public onSelect(selectedHero):void{
        this.selectedHero=selectedHero;
    }
}