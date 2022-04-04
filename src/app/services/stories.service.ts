/* eslint-disable max-len */
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
        photoStorieUrl:
          'https://live.staticflickr.com/736/21911139353_893cfc00aa_b.jpg',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile1.png',
      },
      {
        nameUser: 'james',
        photoStorieUrl:
          'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile2.png',
      },
      {
        nameUser: 'estefania',
        photoStorieUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU68Y8AgMRoD3CWY6M8QlZFzYkZR0eDZkLIw&usqp=CAU',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile3.png',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl:
          'https://static.billygraham.org/sites/billygraham.org/uploads/pro/2019/10/CollegeStudent_IntEvang-feature.jpg',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile1.png',
      },
      {
        nameUser: 'fanny',
        photoStorieUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile3.png',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile1.png',
      },
    ]);
  }

  getStories(): Observable<StorieI[]> {
    return this.storiesBehavior.asObservable();
  }
}
