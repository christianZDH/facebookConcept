import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { StorieI } from '../../interfaces/storie.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input() stories: StorieI[] = [];
  config: SwiperOptions = {
    slidesPerView: 4.5,
    lazy: { loadPrevNext: true },
  };
  constructor() {}

  ngOnInit() {}
}
