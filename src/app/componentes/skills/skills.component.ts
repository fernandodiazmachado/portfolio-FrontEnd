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

  // skillsTypeList -> [0]:Frontend / [1]:Backend / [2]:Soft
  skillsTypeList: any;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getSkill_type().subscribe((data) => {
      return (this.skillsTypeList = data);
    });

    this.datosPortfolio.getSkills().subscribe((data) => {
      this.skillsFrontendList = data.filter((skill: any) => {
        return skill.id_skills_type === this.skillsTypeList[0].id;
      });
      this.skillsBackendList = data.filter((skill: any) => {
        return skill.id_skills_type === this.skillsTypeList[1].id;
      });
      this.softSkillsList = data.filter((skill: any) => {
        return skill.id_skills_type === this.skillsTypeList[2].id;
      });
    });
  }
}
