import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
})
export class AcercaDeMiComponent implements OnInit {
  @Input() stateUser: any;
  aboutMe: any;
  updateAboutMe: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getAcercaDeMi().subscribe((data) => {
      this.aboutMe = data[0];
    });
  }

  public setAboutMeOnMode() {
    this.updateAboutMe = this.aboutMe;
  }
  public onUpdateAboutMe(aboutMe: any): void {
    aboutMe.id = this.updateAboutMe.id;
    this.datosPortfolio.updateAcercaDeMi(aboutMe).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  estaLogueado() {
    if (
      this.stateUser === null ||
      typeof this.stateUser === undefined ||
      typeof this.stateUser === 'undefined' ||
      this.stateUser.auth.currentUser === null
    ) {
      return false;
    } else {
      return true;
    }
  }
}
