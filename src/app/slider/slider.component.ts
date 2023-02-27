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

  isBeginning = true;
  isEnd = false;

  swiperOptions = {
    grabCursor: true,
    speed: 300,
    spaceBetween: 5,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      200: { slidesPerView: 2.5, slidesPerGroup: 2 },
      600: { slidesPerView: 3.4, slidesPerGroup: 3 },
      960: { slidesPerView: 4.4, slidesPerGroup: 4 },
      1280: { slidesPerView: 6.4, slidesPerGroup: 6 },
    },
    on: {
      slideChange: () => this.swiper?.isEnd && console.log('Reached the end'),
    },
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const swiperInstance = new Swiper(
      `#swiper-${this.index}`,
      this.swiperOptions
    );

    this.swiper = swiperInstance;
    // console.log('Created a new swiper instance: ', swiperInstance);
  }

  updateNavButtons() {
    this.isBeginning = this.swiper?.isBeginning ?? false;
    this.isEnd = this.swiper?.isEnd ?? false;
  }

  onPrevClick() {
    this.swiper?.slidePrev();
    this.updateNavButtons();
  }

  onNextClick() {
    this.swiper?.slideNext();
    this.updateNavButtons();
  }
}
