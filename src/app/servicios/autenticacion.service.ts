import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private auth: Auth) {}

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  // register({email, password}:any){
  //   return createUserWithEmailAndPassword(this.auth,email, password);
  // }

  // url = '';
  // currentUserSubject: BehaviorSubject<any>;
  // constructor(private http: HttpClient) {
  //   console.log('El servicio de autenticación está corriendo');
  //   this.currentUserSubject = new BehaviorSubject<any>(
  //     JSON.parse(sessionStorage.getItem('currentUser') || '{}')
  //   );
  // }

  // IniciarSesion(credenciales: any): Observable<any> {
  //   return this.http.post(this.url, credenciales).pipe(
  //     map((data) => {
  //       sessionStorage.setItem('currentUser', JSON.stringify(data));
  //       return data;
  //     })
  //   );
  // }
}
