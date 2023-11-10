import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { ExperienceComponentComponent } from './components/experience-component/experience-component.component';
import { ConnectComponentComponent } from './components/connect-component/connect-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ExperienceComponentComponent,
    ConnectComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [HomeComponent]
})
export class AppModule { }
