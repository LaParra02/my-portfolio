import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {ContactComponent} from "./pages/contact/contact.component";
import {EducationComponent} from "./pages/education/education.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {HomeComponent} from "./pages/home/home.component";
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {SkillsComponent} from "./pages/skills/skills.component";

@NgModule({
  declarations: [
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    LayoutPageComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
