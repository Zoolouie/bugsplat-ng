import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyAngularErrorHandler } from './my-angular-error-handler';
import { ErrorHandler } from '../../node_modules/@angular/core';
import { BugSplatErrorHandler, BugSplatConfiguration, BugSplat, BugSplatLogger, Logger } from 'bugsplat-ng';

describe('DatabaseApplicationVersionSelector', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  const fakeBugSplat = new BugSplat(new BugSplatConfiguration("Test", "test", "fred") , null, null);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
      MyAngularErrorHandler,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component.myAngularHandler.bugsplat = fakeBugSplat;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});