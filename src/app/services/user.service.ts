/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI, CollectionI, FriendI } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userBehavior: BehaviorSubject<UserI> = new BehaviorSubject(null);
  private collectionsBehavior: BehaviorSubject<CollectionI[]> =
    new BehaviorSubject([]);
  private friendsBehavior: BehaviorSubject<FriendI[]> = new BehaviorSubject([]);
  constructor() {
    this.userBehavior.next({
      userPhotoUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQEUp3qpCZF08A/profile-displayphoto-shrink_800_800/0/1641845391322?e=1654732800&v=beta&t=tdmXvkTV_Fk2CZYB2b7x7xU1CP_UNJVUcmOWdJh3JYw',
      userName: 'christian hernández',
      description: 'Christian Hernández | Developer Angular Jr',
      from: 'Matamoros, Tamaulipas, México',
      join: 'Enero de 2011',
      friendsCount: 2004,
    });

    this.collectionsBehavior.next([
      {
        collectionPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile.png',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/coleccion-min.png',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/storie4.png',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/coleccion2-min.png',
        description: 'colección',
      },
      {
        collectionPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/coleccion3-min.png',
        description: 'colección',
      },
    ]);

    this.friendsBehavior.next([
      {
        userName: 'wilber garcia',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile2-min.png',
      },
      {
        userName: 'michael gais',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile-min.png',
      },
      {
        userName: 'daniela lopéz',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/publicationphoto.png',
      },
      {
        userName: 'sarai perez',
        userPhotoUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/profile3.png',
      },
    ]);
  }

  getUser(): Observable<UserI> {
    return this.userBehavior.asObservable();
  }

  getCollections() {
    return this.collectionsBehavior.asObservable();
  }

  getFriends() {
    return this.friendsBehavior.asObservable();
  }
}
