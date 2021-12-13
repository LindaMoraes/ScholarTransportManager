import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escola } from '../model/escola';
import { EscolaService } from '../service/escola.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {
  escolas: Escola[] = []

  constructor(
    private escolaService: EscolaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findEscolas()
    
  }

  findEscolas() {
    this.escolaService.findAllEscolas().subscribe({
      next:escola => this.escolas = escola,
      error: erro => console.log(erro)
    })
   }

   onDeleteEscola(id: any) {
     this.escolaService.deleteEscolaId(id).subscribe({
       next: response => {console.log(response);
                        this.findEscolas();},
       error: erro => alert(erro.message)
     })
   }

   onEditEscola(escola: Escola) {
    this.router.navigate(["/form-escola",escola.id])
  }

}
