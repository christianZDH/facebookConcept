import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { UserI, CollectionI, FriendI } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: UserI;
  collections: CollectionI[] = [];
  friends: FriendI[] = [];
  skeletonImg = false;
  skeletonImgProfile = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ionViewDidEnter() {
    this.userService.getCollections().subscribe((collections) => {
      this.collections = collections;
    });

    this.userService.getFriends().subscribe((friends) => {
      this.friends = friends;
    });
  }
}
