import { TestBed, async } from '@angular/core/testing';

import { SharedMaterialModule } from './../app/shared/shared.material.module';

import { AppModule } from './../app/app.module';
import { AppComponent } from './../app/app.component';

describe('AppComponent', () => {

  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedMaterialModule,
      ],
      declarations: [
        
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
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
