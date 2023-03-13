import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = 'admin';
  password: string = '123';
  error: string= '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username === 'admin' && this.password === '123')
    {
      this.router.navigate(['home']);
    } 
    else {
      this.error = 'Usuário ou senha inválido';
    }
  }
  
  ngOnInit(): void {
  }

}