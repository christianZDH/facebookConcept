import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { FriendI, UserI } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-friends-slide',
  templateUrl: './friends-slide.component.html',
  styleUrls: ['./friends-slide.component.scss'],
})
export class FriendsSlideComponent implements OnInit {
  @Input() friends: FriendI[];
  @Input() user: UserI;
  config: SwiperOptions = {
    slidesPerView: 4,
    lazy: { loadPrevNext: true },
  };
  constructor() {}

  ngOnInit() {}
}
