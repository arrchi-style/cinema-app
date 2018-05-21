import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMovieComponent } from './today-movie.component';

describe('TodayMovieComponent', () => {
  let component: TodayMovieComponent;
  let fixture: ComponentFixture<TodayMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
