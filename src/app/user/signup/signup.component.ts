import { Component } from '@angular/core';
import { SignupDTO } from '../../models/signup-dto.model';
import { UserService } from '../../user.service';

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
    role: 'USER', // ou o valor que preferir
  };

  constructor(private userService: UserService) {}
  

  onSubmit() {
    this.userService.signup(this.model).subscribe(
      (response) => {
        console.log('Usuário registrado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao registrar usuário', error);
      }
    );
  }
}
