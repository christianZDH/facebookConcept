import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ShortcutSlideI } from './interfaces/shortcutslide.interface';

@Component({
  selector: 'app-shortcuts-slide',
  templateUrl: './shortcuts-slide.component.html',
  styleUrls: ['./shortcuts-slide.component.scss'],
})
export class ShortcutsSlideComponent implements OnInit {
  @Input() shortcuts: ShortcutSlideI[];

  configSlide: SwiperOptions = {
    slidesPerView: 1.7,
    freeMode: {
      enabled: true,
    },
  };

  constructor() {}

  ngOnInit() {}
}
