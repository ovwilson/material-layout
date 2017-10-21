import { Routes } from '@angular/router';
import { PostManComponent } from './postman.component';
import { PostManCollectionComponent } from './components/postman-collection/postman-collection.component';

export const APPRROUTES: Routes = [
  { path: '', component: PostManComponent },
  { path: 'collection', component: PostManCollectionComponent, outlet: 'collections' }
];
