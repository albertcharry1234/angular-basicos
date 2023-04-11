import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  visualizar: boolean = false; 
  heroes: string[]=['Spiderman','Hulk','Thor','Loki'];
  heroeBorrado: string ='';
  

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
