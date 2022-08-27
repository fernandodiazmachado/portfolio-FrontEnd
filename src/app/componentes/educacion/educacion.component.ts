import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  @Input() stateUser: any;
  educacionList: any;
  updateEducacion: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getEducacion().subscribe((data) => {
      this.educacionList = data;
    });
  }

  public setUpdateEducation(educacion: any) {
    this.updateEducacion = educacion;
  }

  public onAddEducation(addForm: NgForm): void {
    console.log(addForm);
    this.datosPortfolio.addEducation(addForm).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onUpdateEducation(modifiedEducation: any) {
    modifiedEducation.id = this.updateEducacion.id;
    this.datosPortfolio.updateEducation(modifiedEducation).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteEducation(educacion: any) {
    this.datosPortfolio.deleteEducacion(educacion).subscribe({
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
