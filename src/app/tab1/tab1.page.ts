import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { StorieI } from '../interfaces/storie.interface';
import { PublicationI } from '../interfaces/publication.interface';
import { PublicationsService } from '../services/publications.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserI } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  stories: StorieI[] = [];
  publications: PublicationI[] = [];
  user: UserI;
  storiesSubscription: Subscription;
  userSubscription: Subscription;
  publicationsSubscription: Subscription;
  constructor(
    private storiesService: StoriesService,
    private userService: UserService,
    private publicationsService: PublicationsService
  ) {}

  ngOnDestroy(): void {
    this.storiesSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.publicationsSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.userSubscription = this.userService
      .getUser()
      .subscribe((user: UserI) => {
        this.user = user;
      });

    this.publicationsSubscription = this.publicationsService
      .getPublications()
      .pipe(delay(1500))
      .subscribe((publications) => {
        this.publications = publications;
      });

    this.storiesSubscription = this.storiesService
      .getStories()
      .pipe(delay(3500))
      .subscribe((stories) => {
        this.stories = stories;
      });
  }
}
