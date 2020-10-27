import { WeatherItemComponent } from './weather-item.component';
import { TestBed } from '@angular/core/testing';

describe('Component: WeatherItem', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherItemComponent]
    });
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(WeatherItemComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it('should create', () => {
    expect(WeatherItemComponent).toBeTruthy();
  });

}); 
