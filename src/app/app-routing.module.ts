import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RepositoryDetailComponent } from './components/repository-detail/repository-detail.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'repository/:repo',
    component: RepositoryDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
