import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTemperatureComponent } from './views/show-temperature/show-temperature.component';
import { ShowHistorialComponent } from './views/show-historial/show-historial.component';

const routes: Routes = [
  { path: 'temp', component: ShowTemperatureComponent },
  { path: 'historical/:id/:name', component: ShowHistorialComponent },
  // if url isn't correct redirect to home
  { path: '**', redirectTo: 'temp' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
