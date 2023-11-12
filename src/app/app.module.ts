import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcadmicComponent } from './components/acadmic/acadmic.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ConnectComponent } from './components/connect/connect.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConnectComponent,
    ExperienceComponent,
    FooterComponent,
    CertificationComponent,
    EducationComponent,
    AcadmicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [HomeComponent]
})
export class AppModule {

}
