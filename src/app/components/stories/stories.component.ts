import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { StorieI } from '../../interfaces/storie.interface';
import { UserI } from '../../interfaces/user.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input() stories: StorieI[] = [];
  @Input() user: UserI;
  config: SwiperOptions = {
    slidesPerView: 4.5,
    lazy: { loadPrevNext: true },
  };
  constructor() {}

  ngOnInit() {}
}
