import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  show:number=1;
  //form1
  form1:any;
  nombre:any;
  edad:any;
  email:any;
  fnac:any;
  sexo:any;
  contrasena:any;
  //form2
  form2:any;
  estatura:any;
  peso:any;
  Seleccionado: boolean = true;
  esCardiaco: any;
  esCardiacoCUAL: any;
  esRespiratorio: any;
  esRespiratorioCUAL: any;
  esCirugia: any;
  esCirugiaCUAL: any;
  esAlergia: any;
  esAlergiaCUAL: any;
  esDegenerativa: any;
  esDegenerativaCUAL: any;
  esRepetida: any;
  esRepetidaCUAL: any;

  //form3
  form3:any;
  FUT:any;
  BAL:any;
  VOL:any;
  SAL:any;
  ZUM:any;
  FOL:any;

  constructor() {   }

  ngOnInit(): void {
      this.form1 = new FormGroup({
      nombre : new FormControl(''),
      edad: new FormControl(''),
      email: new FormControl(''),
      fnac: new FormControl(''),
      sexo: new FormControl(''),
      contrasena: new FormControl(''),
    })

    this.form2 = new FormGroup ({
      estatura: new FormControl(''),
      peso: new FormControl(''),
      Seleccionado: new FormControl(''),
      esCardiaco: new FormControl(''),
      esCardiacoCUAL: new FormControl(''),
      esRespiratorio: new FormControl(''),
      esRespiratorioCUAL: new FormControl(''),
      esCirugia: new FormControl(''),
      esCirugiaCUAL: new FormControl(''),
      esAlergia: new FormControl(''),
      esAlergiaCUAL: new FormControl(''),
      esDegenerativa: new FormControl(''),
      esDegenerativaCUAL: new FormControl(''),
      esRepetida: new FormControl(''),
      esRepetidaCUAL: new FormControl(''),
    })

    this.form3 = new FormGroup ({
      FUT: new FormControl(''),
      BAL: new FormControl(''),
      VOL: new FormControl(''),
      SAL: new FormControl(''),
      ZUM: new FormControl(''),
      FOL: new FormControl(''),
    })
  }
  showModal(){
    
  }
  async esLetra(e:any){
    const char = String.fromCharCode(e.keyCode);
    if(/^[A-Za-z ]+$/.test(char)) {return true;}
    else {e.preventDefault();}
    return;
  }
  async esNumero(e:any){
    const char = String.fromCharCode(e.keyCode);
    if(/^[0-9]+$/.test(char)) {return true;}
    else {e.preventDefault();}
    return;
  }
  async form1valid(){
    localStorage.setItem("form1",JSON.stringify(this.form1.value));
    return this.show=2;
  }
  async form2valid(){
    localStorage.setItem("form2",JSON.stringify(this.form2.value));
    return this.show=3;
  }
  async form3valid(){
    localStorage.setItem("form3",JSON.stringify(this.form3.value));
  }
  
}
