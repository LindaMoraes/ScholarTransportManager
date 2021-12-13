import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../service/endereco.service';
import { Endereco } from '../model/endereco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  enderecos: Endereco[] = []


  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findEnderecos()
  }

  findEnderecos() {
    this.enderecoService.findAllEnderecos().subscribe({
      next:endereco => this.enderecos = endereco,
      error: erro => console.log(erro)
    })
  }

  onDeleteEndereco(id: any) {
    this.enderecoService.deleteEnderecoId(id).subscribe({
      next: response => {console.log(response);
                        this.findEnderecos();
                        },
      error: erro => alert(erro.message)
    });

  }

  onEditEndereco(endereco: Endereco) {
    this.router.navigate(["/form-endereco",endereco.id])
  }


}
