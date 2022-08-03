import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITaskTypeOption } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  typeOptions:Array<ITaskTypeOption> = [];
  taskForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.typeOptions = this.taskService.getTypeOptions();
    console.log(this.typeOptions[0].type)
  }

  addTask(){
    console.log(this.taskForm.value);
    this.taskService.postTaskList(this.taskForm.value).subscribe((d)=>{
      console.log(d);
      this.router.navigateByUrl("/");
    },error =>{
      console.error(error);
    })
  }

}
