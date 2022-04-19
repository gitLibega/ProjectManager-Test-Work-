import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/entities/entity';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'], 
})

export class ProjectCardComponent implements OnInit {
  @Input() project: any;

  constructor(private router: Router) { }

  ngOnInit() {
  } 

  showProject(){
    this.router.navigate(["/projects","detail",this.project.id])
  }

  

}
