import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHeadingComponent } from './slider-heading.component';

describe('SliderHeadingComponent', () => {
  let component: SliderHeadingComponent;
  let fixture: ComponentFixture<SliderHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
