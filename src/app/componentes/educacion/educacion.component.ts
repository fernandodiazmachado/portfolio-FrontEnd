import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacionList: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getEducacion().subscribe((data) => {
      this.educacionList = data;
    });
  }
}
