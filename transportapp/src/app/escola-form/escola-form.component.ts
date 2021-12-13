import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaComponent } from '../escola/escola.component';
import { Endereco } from '../model/endereco';
import { Escola } from '../model/escola';
import { EnderecoService } from '../service/endereco.service';
import { EscolaService } from '../service/escola.service';

@Component({
  selector: 'app-escola-form',
  templateUrl: './escola-form.component.html',
  styleUrls: ['./escola-form.component.css']
})
export class EscolaFormComponent implements OnInit {
  enderecos: Endereco[] = []
  escolas: Escola[] = []
  formEscola: FormGroup;
  escolaComponent: EscolaComponent;

  escola: Escola;
  id: number;

  constructor(
    private fBuilder: FormBuilder,
    private escolaService: EscolaService,
    private enderecoService: EnderecoService,
    private activeRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params["id"] 
    this.findEnderecos()
    this.findEscolas()
    

    if (this.id) {
      this.formularioVazio();
      this.escolaService.buscarEscola(this.id).subscribe({
        next: escola => this.formularioCompleto(escola),
        error: erro => console.log(erro)
      })
    } else {
      this.formularioVazio();
    }


    
  }

formularioVazio() {
  this.formEscola = this.fBuilder.group({
    id: [null],
    name: [null],
    contato: [null],
    endereco: [null]
  })
}

formularioCompleto(escola: Escola) {
  this.formEscola = this.fBuilder.group({
    id: escola.id,
    name: escola.name,
    contato: escola.contato,
    endereco: escola.endereco
  })
}

  cadastraEscola() {
    this.escolaService.addEscola(this.formEscola.value).subscribe({
      next: correto => {console.log("Cadastrado com sucesso");
                       this.findEscolas();
                       this.router.navigate(['/escolas']);
                       },
      error: erro => console.log("Erro no cadastro")
    });
  }

  findEnderecos() {
    this.enderecoService.findAllEnderecos().subscribe({
      next:endereco => {
        return this.enderecos = endereco;
      },
      error: erro => console.log(erro)
    })
}

findEscolas() {
  this.escolaService.findAllEscolas().subscribe({
    next:escola => this.escolas = escola,
    error: erro => console.log(erro)
  })
 }



}
