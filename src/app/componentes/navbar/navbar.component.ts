import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogOut() {
    this.autenticacionService
      .logout()
      .then(() => {
        console.log('ejecutando boton de logout');
        this.router.navigate(['/iniciar-sesion']);
      })
      .catch((error) => console.log('error de looginnnnnnnnnnnn'));
  }
}
