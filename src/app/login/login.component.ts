import { Component } from '@angular/core';
import { AuthService } from '../service/api.service';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,  // Marca el componente como standalone
  imports: [FormsModule]  // Importa FormsModule aquí
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('token', response.token); // Guarda el token
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
