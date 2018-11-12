import { Component, OnInit } from '@angular/core';
import { DataService, Heroe } from '../../services/heroes.service';

import { Router } from '@angular/router'; // --> libreria para navegar entre componentes

/* import { Heroe } from '../../interfaces/heroe.interface'; */



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [] ;

  constructor(private _dataHeroes:DataService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._dataHeroes.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
      this.router.navigate(['/heroe',idx]);
  }

}
