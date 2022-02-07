import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from './components/statistic/statistic.component';

const routes: Routes = [{ path: 'statistic', component: StatisticComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
