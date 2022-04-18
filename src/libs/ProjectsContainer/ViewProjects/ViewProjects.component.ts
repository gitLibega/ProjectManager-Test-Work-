import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/entities/entity';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-ViewProjects',
  templateUrl: './ViewProjects.component.html',
  styleUrls: ['./ViewProjects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projService.getProjects;
  }

}
