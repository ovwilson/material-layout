import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './../app/shared/shared.material.module';
import { Router, Route } from '@angular/router';
import { SettingsModule } from './../app/containers/settings/settings.module';
import { SettingViewComponent } from './../app/components/setting-view/setting-view.component';
import { Setting } from './../app/models/setting';

const routes = [
    { path: '', component: SettingViewComponent }
];

describe('Material Test', () => {

    let component: SettingViewComponent;
    let fixture: ComponentFixture<SettingViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SettingsModule,
                SharedMaterialModule,
                BrowserAnimationsModule,
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [

            ],
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(SettingViewComponent);
        component = fixture.componentInstance;
    }));

    it('should poplute input fields', async(() => {
        const setting: Setting = { titleKey: 'test', key: 'i', category: 'Test' };
        fixture.detectChanges();
        component.setValues(setting);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const inputTitleKey = fixture.nativeElement.querySelector('#titleKey').value;
            console.log(inputTitleKey);
            expect(inputTitleKey).toEqual(setting.titleKey);
        });

    }));
    /*
      it(`should have as title 'app'`, async(() => {
        expect(app.title).toEqual('app');
      }));
    
      it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
      })); */
});
