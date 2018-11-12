import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private aRouter:ActivatedRoute, private _data:DataService) {
    
    this.aRouter.params.subscribe(params =>{
        /* console.log(params); */
        this.heroe = this._data.getHeroe(params['id']);
        console.log(this.heroe);
    });

   }

}
