import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/entities/entity';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  form: FormGroup;
  model: Project;

  constructor(private fb: FormBuilder, private projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      id:[],
      startDate: [],
      endDate: [],
      createdBy: [],
      description: []
    });

    this.route.params.subscribe(param => {
      const id = param['id'];
      if(id){     
        console.log(this.model)   
        this.model = this.projectsService.getProjectById(id);
        this.form.patchValue({
          ...this.model,
        endDate: this.model.endDate.toDate().toLocaleDateString("en-Us"),
        startDate: this.model.startDate.toDate().toLocaleDateString("en-Us")
      });
      }
    });
  }

  onSubmit() {
    
    this.validate();

    if(this.form.valid) { 
      this.projectsService.updateProject(({...this.model,...this.form.getRawValue(), startDate:new Date(this.form.controls["startDate"].value), endDate:new Date(this.form.controls["endDate"].value)}));
    }
  }

  validate() {
    this.form.controls["startDate"].setValidators([Validators.required]);
    this.form.controls["endDate"].setValidators([Validators.required]);
    this.form.controls["createdBy"].setValidators([Validators.required]);
    this.form.controls["description"].setValidators([Validators.required]);

    this.form.controls["startDate"].updateValueAndValidity();
    this.form.controls["description"].updateValueAndValidity();
    this.form.controls["endDate"].updateValueAndValidity();
    this.form.controls["createdBy"].updateValueAndValidity();
    
  }
}
