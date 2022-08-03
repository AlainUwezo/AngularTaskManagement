import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ITask, ITaskTypeOption, ITypePercent } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<Array<ITask>>{
    return this.httpClient.get<Array<ITask>>('http://localhost:8080/api/v1/task').pipe(
      map((data:Array<ITask>)=>data));
  }

  postTaskList(task:ITask):Observable<ITask>{
    return this.httpClient.post<ITask>('http://localhost:8080/api/v1/task', task)
                .pipe(map((data:ITask)=>data));
  }
  updateTaskList(task:ITask, id:string):Observable<ITask>{
    return this.httpClient.put<ITask>(`http://localhost:8080/api/v1/task/${id}`, task)
                .pipe(map((data:ITask)=>data));
  }

  deleteTask(id:string){
    return this.httpClient.delete(`http://localhost:8080/api/v1/task/${id}`);
  }

  getTypeOptions():Array<ITaskTypeOption>{
    return [{
      type: 'done'
    },{
      type: 'todo'
    },{
      type: 'pending'
    }]
  }
  getTaskById(id: string):Observable<ITask>{
    return this.httpClient.get<ITask>(`http://localhost:8080/api/v1/task/${id}`).pipe(map((d:ITask)=>d));
  }

  getTypePercentage(): Observable<Array<ITypePercent>>{
    return this.httpClient.get<Array<ITypePercent>>("http://localhost:8080/api/v1/task/vData/percentCountType")
                          .pipe(map((d:Array<ITypePercent>)=>d));
  }
  
}
