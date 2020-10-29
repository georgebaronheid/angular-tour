import {NgModule} from '@angular/core';
// Routing functionalities
import {RouterModule, Routes} from '@angular/router';
// Direction after configuring
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

// Tells Router which view to display when click or direct url
const routes: Routes = [
  // Path: string that matches browser's URL
  // Component: The component that the router should create when accessing this route
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];


@NgModule({
  imports: [
    // Add the import arrays at AppRoutingModule
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    // Availability throughout the application
    RouterModule
  ]
})
export class AppRoutingModule {
}
