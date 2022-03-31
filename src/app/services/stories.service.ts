import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorieI } from '../interfaces/storie.interface';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private storiesBehavior: BehaviorSubject<StorieI[]> = new BehaviorSubject([]);
  constructor() {
    this.storiesBehavior.next([
      {
        nameUser: 'fernanda',
        photoStorieUrl: 'assets/images/storie1.png',
        userPhotoUrl: 'assets/images/profile1.png',
      },
      {
        nameUser: 'james',
        photoStorieUrl: 'assets/images/storie2.png',
        userPhotoUrl: 'assets/images/profile2.png',
      },
      {
        nameUser: 'estefania',
        photoStorieUrl: 'assets/images/storie3.png',
        userPhotoUrl: 'assets/images/profile3.png',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl: 'assets/images/storie4.png',
        userPhotoUrl: 'assets/images/profile1.png',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl: 'assets/images/profile3.png',
        userPhotoUrl: 'assets/images/profile1.png',
      },
    ]);
  }

  getStories(): Observable<StorieI[]> {
    return this.storiesBehavior.asObservable();
  }
}
