import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { UserI, CollectionI, FriendI } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: UserI;
  collections: CollectionI[] = [];
  friends: FriendI[] = [];

  constructor(private userService: UserService) {}

  ionViewDidEnter() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });

    this.userService.getCollections().subscribe((collections) => {
      this.collections = collections;
    });

    this.userService.getFriends().subscribe((friends) => {
      this.friends = friends;
    });
  }
}
