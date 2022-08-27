import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() stateUser: any;
  @Input() currentRoute: any;

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogOut() {
    this.autenticacionService
      .logout()
      .then(() => {
        this.router.navigate(['/portfolio']);
      })
      .catch((error) => console.log('error de login'));
  }

  onRedirectTo(url: string) {
    this.router.navigate([url]);
  }

  noEstaLogueado() {
    if (
      this.stateUser === null ||
      typeof this.stateUser === undefined ||
      this.stateUser.auth.currentUser === null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
