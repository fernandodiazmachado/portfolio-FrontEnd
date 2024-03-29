import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = 'https://portfolio-diaz.herokuapp.com';
  endPointBanner: string = '/personal_information';
  endPointAcercaDeMi: string = '/about_me';
  endPointEducacion: string = '/education';
  endPointExperiencia: string = '/experience';
  endPointProyectos: string = '/proyect';
  endPointSkill_Type: string = '/skill_type';
  endPointSkills: string = '/skills';

  constructor(private http: HttpClient) {}

  getBanner(): Observable<any> {
    return this.http.get(this.url + this.endPointBanner);
  }

  updateBanner(banner: any): Observable<any> {
    return this.http.put(this.url + this.endPointBanner + '/1', banner);
  }

  getAcercaDeMi(): Observable<any> {
    return this.http.get(this.url + this.endPointAcercaDeMi);
  }
  updateAcercaDeMi(aboutMe: any): Observable<any> {
    return this.http.put(
      this.url + this.endPointAcercaDeMi + '/' + aboutMe.id,
      aboutMe
    );
  }
  getEducacion(): Observable<any> {
    return this.http.get(this.url + this.endPointEducacion);
  }

  addEducation(education: any): Observable<any> {
    return this.http.post(this.url + this.endPointEducacion, education);
  }

  updateEducation(education: any): Observable<any> {
    return this.http.put(
      this.url + this.endPointEducacion + '/' + education.id,
      education
    );
  }

  deleteEducacion(education: any): Observable<any> {
    return this.http.delete(
      this.url + this.endPointEducacion + '/' + education.id,
      education
    );
  }
  getExperiencia(): Observable<any> {
    return this.http.get(this.url + this.endPointExperiencia);
  }
  addExperiencia(experience: any): Observable<any> {
    return this.http.post(this.url + this.endPointExperiencia, experience);
  }
  updateExperiencia(experience: any): Observable<any> {
    return this.http.put(
      this.url + this.endPointExperiencia + '/' + experience.id,
      experience
    );
  }
  deleteExperiencia(experience: any): Observable<any> {
    return this.http.delete(
      this.url + this.endPointExperiencia + '/' + experience.id,
      experience
    );
  }
  getProyectos(): Observable<any> {
    return this.http.get(this.url + this.endPointProyectos);
  }

  addProyectos(proyect: any): Observable<any> {
    return this.http.post(this.url + this.endPointProyectos, proyect);
  }
  updateProyectos(proyect: any): Observable<any> {
    return this.http.put(
      this.url + this.endPointProyectos + '/' + proyect.id,
      proyect
    );
  }

  deleteProyect(proyect: any): Observable<any> {
    return this.http.delete(
      this.url + this.endPointProyectos + '/' + proyect.id,
      proyect
    );
  }

  getSkill_type(): Observable<any> {
    return this.http.get(this.url + this.endPointSkill_Type);
  }
  getSkills(): Observable<any> {
    return this.http.get(this.url + this.endPointSkills);
  }
  addSkills(skill: any): Observable<any> {
    return this.http.post(this.url + this.endPointSkills, skill);
  }

  updateSkill(skill: any): Observable<any> {
    return this.http.put(
      this.url + this.endPointSkills + '/' + skill.id,
      skill
    );
  }

  deleteSkill(skill: any): Observable<any> {
    return this.http.delete(
      this.url + this.endPointSkills + '/' + skill.id,
      skill
    );
  }
}
