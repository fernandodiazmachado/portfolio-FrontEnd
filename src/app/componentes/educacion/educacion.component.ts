import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
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
}
