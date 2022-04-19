import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonValidator } from 'src/validators/json.validator';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss'],
  providers:[]
})
export class AddProjectsComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private projService: ProjectsService) { }

  ngOnInit() {

    this.form = this.fb.group({
      json: ["", Validators.required]
    });

    this.form.controls["json"].patchValue(this.projService.getJson())
  }

  onSubmit(){
    this.validateForm();
    if(this.form.valid) {
      this.projService.jsonProjects = this.form.controls["json"].value;
    }

  }

  validateForm() { 
    this.form.controls["json"].setValidators([JsonValidator.check(), Validators.required]);
    this.form.controls["json"].updateValueAndValidity();
  }

}
