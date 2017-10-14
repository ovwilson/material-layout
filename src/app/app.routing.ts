import { Routes } from '@angular/router';

export const APPRROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './containers/home/home.module#HomeModule', data: { preload: true } },
    { path: '', loadChildren: './containers/home/home.module#HomeModule', data: { preload: true } },
    { path: '**', loadChildren: './containers/home/home.module#HomeModule', data: { preload: true } }
];
