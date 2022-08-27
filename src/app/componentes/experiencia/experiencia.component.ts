import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  @Input() stateUser: any;
  experienciaList: any;
  updateExperience: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getExperiencia().subscribe((data) => {
      this.experienciaList = data;
    });
  }

  public setUpdateExperience(experiencia: any) {
    this.updateExperience = experiencia;
  }

  public onAddExperience(addForm: NgForm) {
    this.datosPortfolio.addExperiencia(addForm).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onUpdateExperience(experience: any) {
    experience.id = this.updateExperience.id;
    this.datosPortfolio.updateExperiencia(experience).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeleteExperience(experience: any) {
    this.datosPortfolio.deleteExperiencia(experience).subscribe({
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
