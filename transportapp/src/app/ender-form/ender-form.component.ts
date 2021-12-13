import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-ender-form',
  templateUrl: './ender-form.component.html',
  styleUrls: ['./ender-form.component.css']
})
export class EnderFormComponent implements OnInit {

  formEndereco: FormGroup;
  endereco: Endereco;
  id: number;
  

  constructor(

    private fBuilder: FormBuilder,
    private enderecoService: EnderecoService,
    private activeRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params["id"] 

    if (this.id) {
      this.formularioVazio();
      this.enderecoService.buscarEndereco(this.id).subscribe({
        next: endereco => this.formularioCompleto(endereco),
        error: erro => console.log(erro)
      })
    } else {
      this.formularioVazio();
    }
    
  }

  formularioVazio() {
    this.formEndereco = this.fBuilder.group({
      id: [null],
      cidade: [null],
      bairro: [null],
      rua: [null],
      numero: [null]
    })
  }

  formularioCompleto(endereco: Endereco) {
    this.formEndereco = this.fBuilder.group({
      id: endereco.id,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      rua: endereco.rua,
      numero: endereco.numero
    })
  }

  cadastraEndereco() {
    this.enderecoService.addEndereco(this.formEndereco.value).subscribe({
      next: correto => {
        console.log("Cadastrado com sucesso");
        this.endereco = correto;
      },
      error: erro => console.log("Erro no cadastro")
    });
  }

}
