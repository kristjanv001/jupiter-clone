import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() jupiterData?: any[];
  @Input() data?: any[];
  @Input() swiper?: Swiper;
  @Input() index?: number;

  swiperOptions = {
    // cssMode: true,
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

  constructor() {}

  ngOnInit() {
    console.log(this.index);
  }

  ngAfterViewInit(): void {
    const swiperInstance = new Swiper(
      `#swiper-${this.index}`,
      this.swiperOptions
    );

    this.swiper = swiperInstance;

    console.log('Created a new swiper instance: ', swiperInstance);
  }

  onPrevClick() {
    this.swiper?.slidePrev();
  }

  onNextClick() {
    this.swiper?.slideNext();
  }
}
