import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Project } from 'src/entities/entity';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
private json: string = "";
private projects: Project[] = [];
constructor(private router: Router) { }

set jsonProjects (projects: string) {
  this.json = projects;
  localStorage.setItem('projects', projects);
  this.convertJsonToModel();
}

get getProjects(): Project[] {
  this.convertJsonToModel();
  return this.projects
}

private convertJsonToModel() {
    this.projects = (JSON.parse(localStorage.getItem("projects") || this.json).Projects as Project[]).map(x => {
      
      return {...x, endDate:moment(new Date(x.endDate)), startDate:moment(new Date(x.startDate))};
    });
    this.router.navigate(["/projects","detail", this.projects[0]?.id || ""]);

  }


getProjectById(id: number): Project{
  return this.projects.find(x => x.id == id) as Project;
}

updateProject(model: Project) {
  console.log(model);
  for(let [index, item] of this.projects.entries()){
    if(item.id == model.id) {
      this.projects[index] = model;
    }
  }  
  localStorage.setItem("projects", `{ "Projects":${JSON.stringify(this.projects)}}`);
  this.convertJsonToModel();
}

getJson() {
  return localStorage["projects"] || this.json;
}



}
