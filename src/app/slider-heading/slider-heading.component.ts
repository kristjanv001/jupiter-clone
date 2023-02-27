import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-heading',
  templateUrl: './slider-heading.component.html',
  styleUrls: ['./slider-heading.component.css'],
})
export class SliderHeadingComponent {
  @Input() data?: any;
}
