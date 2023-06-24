import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncontradoSingleComponent } from './components/encontrado-single/encontrado-single.component';
import { EncontradosComponent } from './components/encontrados/encontrados.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { CrearreporteComponent } from './components/crearreporte/crearreporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    EncontradosComponent,
    EncontradoSingleComponent,
    AcercadeComponent,
    CrearreporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
