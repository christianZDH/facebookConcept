import { Component, Input, OnInit } from '@angular/core';
import { CollectionI } from 'src/app/interfaces/user.interface';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-collections-slide',
  templateUrl: './collections-slide.component.html',
  styleUrls: ['./collections-slide.component.scss'],
})
export class CollectionsSlideComponent implements OnInit {
  @Input() collections: CollectionI[];
  config: SwiperOptions = {
    slidesPerView: 3.5,
    lazy: { loadPrevNext: true },
  };
  constructor() {}

  ngOnInit() {}
}
