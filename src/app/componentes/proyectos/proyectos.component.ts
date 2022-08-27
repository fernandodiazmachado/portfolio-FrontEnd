import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  @Input() stateUser: any;
  proyectosList: any;
  updateProyect: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getProyectos().subscribe((data) => {
      this.proyectosList = data;
    });
  }

  public setUpdateProyect(proyect: any) {
    this.updateProyect = proyect;
  }

  public onAddProyect(addForm: NgForm): void {
    console.log(addForm);
    this.datosPortfolio.addProyectos(addForm).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onUpdateProyect(modifiedProyect: any) {
    modifiedProyect.id = this.updateProyect.id;
    this.datosPortfolio.updateProyectos(modifiedProyect).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteProyect(proyect: any) {
    this.datosPortfolio.deleteProyect(proyect).subscribe({
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
