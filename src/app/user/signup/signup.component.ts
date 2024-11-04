import { Component } from '@angular/core';
import { SignupDTO } from '../../models/signup-dto.model';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  model: SignupDTO = {
    name: '',
    password: '',
    email: '',
    role: 'USER',
  };

  constructor(private userService: UserService, private router: Router) {}
  

  onSubmit() {
    this.userService.signup(this.model).subscribe(
      (response) => {
        console.log('Usuário registrado com sucesso!', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erro ao registrar usuário', error);
      }

    );
  }
}
