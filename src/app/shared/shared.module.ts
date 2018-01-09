import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './../features/navbar/navbar.component';
import { LoaderIndeterminateComponent } from './../features/loader-indeterminate/loader-indeterminate.component';
import { SidenavStartComponent } from './../features/sidenavs/components/sidenav-start/sidenav-start.component';
import { SidenavEndComponent } from './../features/sidenavs/components/sidenav-end/sidenav-end.component';

import { SharedMaterialModule } from './shared.material.module';

// Reducers
import { loaders } from './../features/loader-indeterminate/reducers/loaders';
import { settings } from './../features/settings/reducers/settings';
import { sidenavs } from './../features/sidenavs/reducers/sidenavs';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        StoreModule.forFeature('loaders', loaders),
        StoreModule.forFeature('settings', settings),
        StoreModule.forFeature('sidenavs', sidenavs)
    ],
    declarations: [
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent,
        LoaderIndeterminateComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent,
        LoaderIndeterminateComponent
    ]
})
export class SharedModule { }
