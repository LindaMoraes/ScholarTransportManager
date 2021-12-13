import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/client';
import { Imagem } from '../model/imagem';
import { ClienteService } from '../service/cliente.service';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = []
  imagens: Imagem[] = []
  public editCliente: Cliente;
  files: Set<File>;
  nomeArquivo: string;
  size: number;
  status: string;
  

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private imagemService: ImagesService
  ) { }

  ngOnInit(): void {
    this.findClientes()
    this.findAllImagens()
  }

  findClientes() {
    this.clienteService.findAllClientes().subscribe({
      next:client => this.clientes = client,
      error: erro => console.log(erro)
    })
   }

  public onOpenModal(cliente: Cliente, mode: string):void {
        const container = document.getElementById('main-container')!
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode == 'add') {
          button.setAttribute('data-target', '#addClienteModal');
        }
        if (mode == 'edit') {
          this.editCliente = cliente;
          button.setAttribute('data-target', '#updateClienteModal');
        }
        if (mode == 'delete') {
          button.setAttribute('data-toggle', '#deleteClienteModal');
        }
        container.appendChild(button);
        button.click();
      }

  public onAddCliente(addForm: NgForm): void {
    document.getElementById('add-cliente-form')
    
    this.clienteService.addCliente(addForm.value).subscribe(
      (response: Cliente) => {
        console.log(response);
        this.findClientes();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public searchClientes(key: string): void {
    console.log(key);
    const results: Cliente[] = [];
    for (const cliente of this.clientes) {
      if (cliente.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || cliente.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || cliente.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || cliente.escola.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(cliente);
      }
    }
    this.clientes = results;
    if (results.length === 0 || !key) {
      this.findClientes();
    }
  }
  

  onDeleteCliente(id: any){
  this.clienteService.deleteClienteId(id).subscribe({
    next: response => {console.log(response);
                      this.findClientes();},
    error: erro => alert(erro.message)
  });
  }

  onEditCliente(cliente: Cliente) {
    this.router.navigate(["/formulario",cliente.id])
  }

  onChange(e: any){
    const selectedFiles = <FileList>e.srcElement.files;

    const fileNames : string[] = [];
    this.files = new Set();

    for(let c = 0; c < selectedFiles.length; c ++) {
      fileNames.push(selectedFiles[c].name);
      this.files.add(selectedFiles[c]);
    }

    this.nomeArquivo = fileNames.join(", ");
    this.size = this.files.size;
    
    
  }

  onUpload(id: any){
    this.imagemService.upload(this.files, id).subscribe({
      next : enviado => console.log("enviado com sucesso", enviado),
      error : err => console.log(err)
    })
  }

  findAllImagens() {
    this.imagemService.findAllImagens().subscribe({
      next: img => { this.imagens = img},
      error: erro => console.log(erro)
    })
    
  }


}
