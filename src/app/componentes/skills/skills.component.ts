import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() stateUser: any;
  skillsFrontendList: any;
  skillsBackendList: any;
  softSkillsList: any;

  // skillsTypeList -> [0]:Frontend / [1]:Backend / [2]:Soft
  skillsTypeList: any;
  selectedValue: any;
  skillToUpdate: any;
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

  public onChangeSelect(e: any) {
    this.selectedValue = e.target.value;
  }

  public onAddSkill(skill: NgForm) {
    this.skillToUpdate = skill;
    this.skillToUpdate.id_skills_type = this.selectedValue;
    this.datosPortfolio.addSkills(this.skillToUpdate).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  setUpdateSkill(skill: any) {
    this.skillToUpdate = skill;
  }

  public onUpdateSkill(modifiedSkill: any) {
    console.log(modifiedSkill);
    modifiedSkill.id = this.skillToUpdate.id;
    modifiedSkill.id_skills_type = this.skillToUpdate.id_skills_type;
    console.log(modifiedSkill);
    this.datosPortfolio.updateSkill(modifiedSkill).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteSkill(skill: any) {
    this.datosPortfolio.deleteSkill(skill).subscribe({
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
