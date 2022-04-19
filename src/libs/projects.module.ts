import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { AddProjectsComponent } from './projects-container/add-projects/add-projects.component';
import { ViewProjectsComponent } from './projects-container/ViewProjects/view-projects.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './projects-container/ViewProjects/project-detail/project-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './projects-container/ViewProjects/project-card/project-card.component';
import '@angular/common/locales/global/ru';
import { NavbarComponent } from './projects-container/navbar/navbar.component';

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
