import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService,Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  termino:string;
  heroes:Heroe[] = [];

  constructor(private aRouter:ActivatedRoute, private _data:DataService) { }

  ngOnInit() {
    this.aRouter.params.subscribe(params =>{

        this.heroes = this._data.buscarHeroes(params['termino']);
        console.log(this.heroes);
        this.termino = params['termino'];
    });
  }

}
