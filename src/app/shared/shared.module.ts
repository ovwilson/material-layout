import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { LoaderIndeterminateComponent } from './../components/loader-indeterminate/loader-indeterminate.component';
import { SidenavStartComponent } from './../components/sidenav-start/sidenav-start.component';
import { SidenavEndComponent } from './../components/sidenav-end/sidenav-end.component';
import { SharedMaterialModule } from './shared.material.module';
import { SharedFormsModule } from './shared.forms.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        SharedFormsModule
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
        SharedFormsModule,
        SharedMaterialModule,
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent,
        LoaderIndeterminateComponent
    ]
})
export class SharedModule { }
