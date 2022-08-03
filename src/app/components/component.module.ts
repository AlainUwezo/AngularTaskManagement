import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './task/list/list.component';
import { MaterialModule } from '../material/material.module';
import { AddComponent } from './task/add/add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './task/show/show.component';

@NgModule({
  declarations: [
    HomeComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    ListComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MaterialModule,
    MatFormFieldModule,
    // MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    ListComponent,
    AddComponent,
    ShowComponent
  ]
})
export class ComponentModule { }
