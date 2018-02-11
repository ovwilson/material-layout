import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, Route } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { DialogComponent } from './../dialog/dialog.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  dialogRef$: Observable<any> = Observable.of<any>();

  constructor(private router: Router, public dialog: MatDialog) {

  }

  toggleSideNavStart() {
    this.store.dispatch(new fromSideNavActions.SideNavStartToggle());
  }

  toggleSideNavEnd() {
    this.store.dispatch(new fromSideNavActions.SideNavEndToggle());
  }

  onRequests() {
    this.router.navigate(['/request-add', { outlets: { 'requests': 'requests' } }]);
  }

  onPostMan() {
    this.router.navigate(['/postman', { outlets: { 'collections': 'collection' } }]);
  }

  onCreate() {
    const dialogRef = this.dialog.open(DialogComponent, {
       data: { title: 'test', message: 'test message' }
    });
    this.dialogRef$ = dialogRef.afterClosed()
    .do(result => console.log('The dialog was closed', result));
  }

}
