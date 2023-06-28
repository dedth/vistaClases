import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VotantesService } from '../votante/votantes.service';

@Component({
  selector: 'app-votante-lista',
  templateUrl: './votante-lista.component.html',
  styleUrls: ['./votante-lista.component.scss']
})
export class VotanteListaComponent {
 votantes: any[] = [];
 seleccionarVotante:any;
 

 constructor(private votantesService:VotantesService, private router: Router){
  this.votantes = this.votantesService.votantes;
  this.getAllCountries();
  }


  crearVotante() {
    this.votantesService.seleccionarVotante = null;
    this.router.navigate(['votante']);
  }

  editarVotante(votante: any) {
    this.votantesService.seleccionarVotante = votante;
    this.router.navigate(['votante']);
  }

  borrarVotante(id: number) {
    this.votantesService.borrarVotante(id);
    console.log(this.votantesService.votantes);
  }

  getAllCountries() {
    console.log('1');

    this.votantesService.getAllCountries().subscribe(
      (      response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }
    );

    console.log('3');
  }

}
