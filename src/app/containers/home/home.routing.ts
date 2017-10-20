import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostManTableComponent } from './../../features/postman/postman-table/postman-table.component';

export const APPRROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'postman', component: PostManTableComponent, outlet: 'tables' }
];
