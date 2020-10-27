import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';

describe('AppComponent', () => {

  let h1: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'openweathermap'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('openweathermap');
  });

});
