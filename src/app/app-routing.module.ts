import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoringAdminComponent } from './scoring-admin/scoring-admin.component';
import { ShabComponent } from './shab/shab.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'admin',component:ScoringAdminComponent},
  {path:'shab',component:ShabComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
