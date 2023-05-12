import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RegisterComponent } from './register/register.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { AccComponent } from './acc/acc.component';


const routes: Routes = [
  { path: '', component: AccComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'formulaire', component: FormulaireComponent },
  { path:'projects', component:ProjectsComponent},
  { path:'cv', component:CvComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'experience', component:ExperienceComponent },
  { path: 'education', component:EducationComponent },
  { path: '**', redirectTo: 'NotFoundComponent'}






];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})




export class AppRoutingModule { }
