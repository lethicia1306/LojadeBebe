import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      telefone: [''],
      dataNascimento: [''],
      genero: ['']
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário enviado:', this.cadastroForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados
    }
  }
}