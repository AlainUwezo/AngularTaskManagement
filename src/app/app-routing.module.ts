import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/task/add/add.component';

const routes: Routes = [
  {path:"bar", component:BarChartComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"task",
    children: [
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  },
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
