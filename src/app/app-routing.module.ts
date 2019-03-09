import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule'
  },
  {
    path: 'consultant',
    loadChildren: './consultant/consultant.module#ConsultantModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clients'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
