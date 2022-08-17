import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
})
export class AcercaDeMiComponent implements OnInit {
  public aboutMe: any;
  public updateAboutMe: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getAcercaDeMi().subscribe((data) => {
      this.aboutMe = data[0];
    });
  }

  // public onOpenModal(aboutMe: any) {
  //   console.log('abriendo modal????');
  // }

  public onUpdateAboutMe(aboutMe: any): void {
    this.aboutMe.about = aboutMe.about;
    // console.log(aboutMe.about);
    // console.log(this.aboutMe);
    // document.getElementById('updateForm')?.click();
    this.datosPortfolio.updateAcercaDeMi(this.aboutMe).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
