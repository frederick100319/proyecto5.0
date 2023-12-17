import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Inicializar el formulario de creación de usuario
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  // Función para procesar el inicio de sesión
  login() {
    // Implementar la lógica de inicio de sesión aquí
    console.log('Iniciar sesión:', this.loginForm.value);
  }

  // Función para procesar la creación de usuario
  signup() {
    // Implementar la lógica de creación de usuario aquí
    console.log('Crear usuario:', this.signupForm.value);
  }
}

