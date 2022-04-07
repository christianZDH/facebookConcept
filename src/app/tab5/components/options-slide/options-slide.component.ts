import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { OptionSlideI } from './interfaces/optionslide.interface';

@Component({
  selector: 'app-options-slide',
  templateUrl: './options-slide.component.html',
  styleUrls: ['./options-slide.component.scss'],
})
export class OptionsSlideComponent implements OnInit {
  @Input() options: OptionSlideI[];
  configSlide: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 2.1,
    freeMode: {
      enabled: true,
    },
  };
  constructor() {}

  ngOnInit() {}
}
