import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared.material.module';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { SidenavStartComponent } from './../components/sidenav-start/sidenav-start.component';
import { SidenavEndComponent } from './../components/sidenav-end/sidenav-end.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule
    ],
    declarations: [
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent
    ]
})
export class SharedModule { }
