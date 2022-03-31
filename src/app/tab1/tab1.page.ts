import { Component } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { StorieI } from '../interfaces/storie.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  stories: StorieI[] = [];
  constructor(private storiesService: StoriesService) {
    this.storiesService.getStories().subscribe((stories) => {
      this.stories = stories;
    });
  }
}
