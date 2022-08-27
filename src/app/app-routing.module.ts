import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/portfolio' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  //Código para redireccionar si no se ha iniciado sesion.
  // {
  //   path: 'portfolio-admin',
  //   component: PortfolioAdminComponent,
  //   ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
