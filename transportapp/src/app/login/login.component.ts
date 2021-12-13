import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastro: FormGroup

  constructor(

    private userService: UserService,
    private router: Router,
    private fB: FormBuilder

  ) {

   }

  ngOnInit(): void {

    this.cadastro = this.fB.group({
      username: [null],
      password: [null]
    }) 

  }

  entrar() {
    this.userService.login(this.cadastro.value.username, this.cadastro.value.password).subscribe({
      next: sim => {
        let params = new HttpParams().set("username", this.cadastro.value.username);
        this.userService.getUser(params.toString()).subscribe({         
          next : usuario => {
            localStorage.setItem("user", JSON.stringify(usuario));
            this.router.navigate(["/home"])
          },
          error : err => console.log("LInda só reclama")
        })
      },
      error : err => console.log("senha errada catapimbas")
    })  
  }

}
