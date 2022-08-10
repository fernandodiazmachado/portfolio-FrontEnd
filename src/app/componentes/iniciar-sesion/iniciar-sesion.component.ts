import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar() {
    console.log(this.form.value);
    this.autenticacionService
      .login(this.form.value)
      // .then((response) => console.log(response))
      .then(() => this.ruta.navigate(['/portfolio']))
      .catch((error) => console.log(error));
  }

  // onEnviar(event: Event) {
  //   event.preventDefault;
  //   this.autenticacionService
  //     .IniciarSesion(this.form.value)
  //     .subscribe((data) => {
  //       console.log('DATA:' + JSON.stringify(data));
  //       this.ruta.navigate(['/portfolio']);
  //     });
  // }
}
