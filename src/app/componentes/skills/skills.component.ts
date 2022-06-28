import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillsFrontendList: any;
  skillsBackendList: any;
  softSkillsList: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.skillsFrontendList = data.skill_frontend;
      this.skillsBackendList = data.skill_backendend;
      this.softSkillsList = data.soft_skill;
    });
  }
}
