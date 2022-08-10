import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getProyectos().subscribe((data) => {
      this.proyectosList = data;
    });
  }
}