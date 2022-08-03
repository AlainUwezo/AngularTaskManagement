import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, ITaskTypeOption } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  typeOptions:Array<ITaskTypeOption> = [];
  taskForm!:FormGroup;

  constructor(public dialogRef: MatDialogRef<ShowComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITask,
              private formBuilder:FormBuilder, 
              private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
      });
      this.typeOptions = this.taskService.getTypeOptions();
    this.showTask();

  }

  showTask(){
    this.taskService.getTaskById(this.data.id).subscribe(
      (d:ITask) => {
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['type'].setValue(d.type);
        this.taskForm.controls['dueDate'].setValue(d.dueDate);
        this.taskForm.controls['description'].setValue(d.description);
      },
      (error) => console.log(error)
    )

  }

  updateTask(){
    this.taskService.updateTaskList(this.taskForm.value, this.data.id).subscribe((d)=>{
      this.dialogRef.close();
    }, error => console.error(error));
  }

  onDeleteTask(){
    this.taskService.deleteTask(this.data.id).subscribe((d)=>{
      console.log(d);
      this.dialogRef.close();
    }, error => console.error(error));
  }

}
  