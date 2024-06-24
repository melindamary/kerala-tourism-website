import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDistrictComponent } from './individual-district.component';

describe('IndividualDistrictComponent', () => {
  let component: IndividualDistrictComponent;
  let fixture: ComponentFixture<IndividualDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualDistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
