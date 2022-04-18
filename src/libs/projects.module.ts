import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProjectsContainerComponent } from './ProjectsContainer/ProjectsContainer.component';
import { NavbarComponent } from './ProjectsContainer/Navbar/Navbar.component';
import { AddProjectsComponent } from './ProjectsContainer/AddProjects/AddProjects.component';
import { ViewProjectsComponent } from './ProjectsContainer/ViewProjects/ViewProjects.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './ProjectsContainer/ViewProjects/project-detail/project-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './ProjectsContainer/ViewProjects/project-card/project-card.component';
import '@angular/common/locales/global/ru';

const routes: Routes = [
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: 'add', component: AddProjectsComponent },
  { path: 'projects', component: ViewProjectsComponent },
  {
    path: 'projects/detail/:id',
    component: ViewProjectsComponent,
    children: [{ path: '', component: ProjectDetailComponent }],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProjectsContainerComponent,
    NavbarComponent,
    AddProjectsComponent,
    ViewProjectsComponent,
    ProjectDetailComponent,
    ProjectCardComponent,
  ],
  exports: [ProjectsContainerComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
})
export class ProjectsModule {}
