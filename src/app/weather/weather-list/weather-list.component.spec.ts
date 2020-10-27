import { async, TestBed } from '@angular/core/testing';
import { WeatherListComponent } from "./weather-list.component";


describe('Component: WeatherList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherListComponent]
    });
  });
 
  it('should create WeatherListComponent', () => {
    expect(WeatherListComponent).toBeTruthy();
  });

});