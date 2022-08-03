import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { TaskService } from 'src/app/services/task.service';
import { ITypePercent } from 'src/app/interface/task.interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doughnutChartData: ChartData<'doughnut'> = {
    labels: [
      'done',
      'pending',
      'todo'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  percents!:number[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

    this.getTypePercent();
  }

  getTypePercent(){
    this.percents = [2, 8];
    this.taskService.getTypePercentage().subscribe((d)=>{
      d.forEach((type:ITypePercent)=>{

      })
    }, error=>console.error(error));
    console.log(this.percents);
    // this.doughnutChartData.datasets[0].data = this.percents;
    // this.doughnutChartData.datasets[0].data.push(211);
    // this.doughnutChartData.datasets[0].data.push(211);
    // this.doughnutChartData.datasets[0].data.push(211);
    // this.doughnutChartData.datasets[0].data.push(211);
    // this.doughnutChartData.datasets[0].data.push(211);

    this.taskService.getTypePercentage().pipe(
      map((d)=>{
        this.doughnutChartData.datasets[0].data.push(32);
        console.log(this.doughnutChartData.datasets[0].data);
        console.log("Alain");
      })
    ).subscribe();
  }


}
