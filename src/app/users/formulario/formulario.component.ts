import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formUser!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(usuario: User) {
    this.formUser = new FormGroup({
      nome: new FormControl(usuario.nome),
      sobrenome: new FormControl(usuario.sobrenome),
      email: new FormControl(usuario.email)
    });
  }

}
