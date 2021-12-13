import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/client';
import { Endereco } from '../model/endereco';
import { Escola } from '../model/escola';
import { ClienteService } from '../service/cliente.service';
import { EnderecoService } from '../service/endereco.service';
import { EscolaService } from '../service/escola.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  escolas: Escola[] = []
  enderecos: Endereco[] = []
  clientes: Cliente[] = []
  formCliente: FormGroup;
  
  endereco: Endereco;
  id: number;

  constructor(
    private fBuilder: FormBuilder,
    private clienteService: ClienteService,
    private escolaService: EscolaService,
    private enderecoService: EnderecoService,
    private activeRouter: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params["id"] 
    this.findEscolas()
    this.findEnderecos()

    if (this.id) {
      this.formularioVazio();
      this.clienteService.buscarCliente(this.id).subscribe({
        next: cliente => this.formularioCompleto(cliente),
        error: erro => console.log(erro)
      })
    } else {
      this.formularioVazio();
    }
    
    }

    formularioVazio() {
      this.formCliente = this.fBuilder.group({
        id: [null],
        name: [null],
        email: [null],
        phone: [null],
        imageUrl: [null],
        endereco: this.endereco,
        escola: [null]
      })
    }

    formularioCompleto(cliente: Cliente) {
      this.formCliente = this.fBuilder.group({
        id: cliente.id,
        name: [cliente.name],
        email: [cliente.email],
        phone: [cliente.phone],
        imageUrl: [cliente.imageUrl],
        endereco: cliente.endereco,
        escola: [cliente.escola]
      })
    }

    teste() {
      console.log(this.formCliente.value)
    }

    findClientes() {
      this.clienteService.findAllClientes().subscribe({
        next:client => this.clientes = client,
        error: erro => console.log(erro)
      })
     }

    cadastraCliente() {
      this.clienteService.addCliente(this.formCliente.value).subscribe({
        next: correto => {console.log(this.formCliente.value);
                          this.findClientes();
                         this.router.navigate(['/clientes']);
                        },
        error: erro => console.log("Erro no cadastro")
      });
    }

    findEscolas() {
      this.escolaService.findAllEscolas().subscribe({
        next:escola => this.escolas = escola,
        error: erro => console.log(erro)
      })
     }

  //  const valorAsync = new Promise((resolve, reject) => {
 //     setTimeout(() => resolve(this.cadastraCliente()), 10000);
 //   });

    findEnderecos() {
      this.enderecoService.findAllEnderecos().subscribe({
        next:endereco => this.enderecos = endereco,
        error: erro => console.log(erro)
      })
    }
  
  }

