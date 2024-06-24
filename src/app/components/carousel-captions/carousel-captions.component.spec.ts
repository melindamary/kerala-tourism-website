import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCaptionsComponent } from './carousel-captions.component';

describe('CarouselCaptionsComponent', () => {
  let component: CarouselCaptionsComponent;
  let fixture: ComponentFixture<CarouselCaptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCaptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCaptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
