import { Action } from '@ngrx/store';

export const SIDENAV_START_TOGGLE = '[SideNav] Start Toggle';
export const SIDENAV_END_TOGGLE = '[SideNav] End Toggle';
export const SIDENAV_RESET = '[SideNa] Reset';


export class SideNavStartToggle implements Action {
    readonly type = SIDENAV_START_TOGGLE;
}

export class SideNavEndToggle implements Action {
    readonly type = SIDENAV_END_TOGGLE;
}


export class SideNavReset implements Action {
    readonly type = SIDENAV_RESET;
}

export type All
    = SideNavStartToggle
    | SideNavEndToggle
    | SideNavReset;
