import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AcadmicComponent } from './acadmic/acadmic.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './certification/certification.component';
import { ConnectComponent } from './connect/connect.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
