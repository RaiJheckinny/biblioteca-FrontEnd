import { Component } from '@angular/core';
import { LoginDTO } from '../../models/login-dto.model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  model: LoginDTO = {
    password: '',
    email: ''
}

constructor(private userService: UserService, private router: Router) {}

onSubmit() {
  this.userService.login(this.model).subscribe(
    (response) => {
      console.log('Usuário Logado!', response);
      this.router.navigate(['/home']);
    },
    (error) => {
      console.error('Erro ao Logar usuário', error);
    }

  );
}

};
