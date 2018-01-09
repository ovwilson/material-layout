import { Routes } from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestAddComponent } from './components/request-add/request-add.component';


export const APPRROUTES: Routes = [
  { path: '', component: RequestAddComponent },
  { path: 'requests', component: RequestsComponent, outlet: 'requests' }
];
