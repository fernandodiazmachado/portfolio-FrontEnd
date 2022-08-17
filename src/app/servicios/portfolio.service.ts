import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  // url: string = '../../assets/data/data.json';
  url: string = 'https://portfolio-diaz.herokuapp.com';
  endPointBanner: string = '/personal_information';
  endPointAcercaDeMi: string = '/personal_information';
  endPointEducacion: string = '/education';
  endPointExperiencia: string = '/experience';
  endPointProyectos: string = '/proyect';
  endPointSkill_Type: string = '/skill_type';
  endPointSkills: string = '/skills';

  constructor(private http: HttpClient) {}

  getBanner(): Observable<any> {
    return this.http.get(this.url + this.endPointBanner);
  }
  getAcercaDeMi(): Observable<any> {
    return this.http.get(this.url + this.endPointAcercaDeMi);
  }
  updateAcercaDeMi(aboutMe: any): Observable<any> {
    return this.http.put(this.url + this.endPointAcercaDeMi + '/1', aboutMe);
  }
  getEducacion(): Observable<any> {
    return this.http.get(this.url + this.endPointEducacion);
  }
  getExperiencia(): Observable<any> {
    return this.http.get(this.url + this.endPointExperiencia);
  }
  getProyectos(): Observable<any> {
    return this.http.get(this.url + this.endPointProyectos);
  }
  getSkill_type(): Observable<any> {
    return this.http.get(this.url + this.endPointSkill_Type);
  }
  getSkills(): Observable<any> {
    return this.http.get(this.url + this.endPointSkills);
  }
}
