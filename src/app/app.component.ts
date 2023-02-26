import { Component } from '@angular/core';
import { TimelineService } from './timeline.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Jupiter';
  jupiterData?: any[];

  swipers: Swiper[] = [];

  swiperOptions = {
    grabCursor: true,
    speed: 300,
    spaceBetween: 5,
    navigation: true,
    breakpoints: {
      200: { slidesPerView: 2.5, slidesPerGroup: 2 },
      600: { slidesPerView: 3.4, slidesPerGroup: 3 },
      960: { slidesPerView: 4.4, slidesPerGroup: 4 },
      1280: { slidesPerView: 6.4, slidesPerGroup: 6 },
    },
  };

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.getJupiterData().subscribe((data) => {
      this.jupiterData = data.data.category.frontPage;
      console.log(this.jupiterData);
    });
  }
}
