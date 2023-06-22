import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { EncontradosComponent } from './components/encontrados/encontrados.component';
import { EncontradoSingleComponent } from './components/encontrado-single/encontrado-single.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent},
  {path: 'encontrados', component: EncontradosComponent},
  {path: 'single', component: EncontradoSingleComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
