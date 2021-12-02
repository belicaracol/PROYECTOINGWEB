import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(public fb: FormBuilder ) {

    this.formLogin = this.fb.group({
      email: new FormControl(''),
      contrasena: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  async ingresar(){
    const f = this.formLogin.value;
    console.log(JSON.parse(localStorage.getItem("form1") || '{}'));
    const usuario = JSON.parse(localStorage.getItem("form1") || '{}');
    console.log(usuario.email);
    console.log(usuario.contrasena);
    console.log(f.email);
    console.log(f.contrasena);
    if(usuario.email === f.email && usuario.contrasena === f.contrasena){
      localStorage.setItem('Ingresado', 'True');
      console.log('Has iniciado sesion');
      alert('Has iniciado sesion')
    } else {
      localStorage.setItem('Ingresado', 'False');
      console.log('No existe la cuenta');
      alert('No existe la cuenta')
    }

  }
}
