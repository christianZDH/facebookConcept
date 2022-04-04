/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PublicationI } from '../interfaces/publication.interface';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private publicationsBehavior: BehaviorSubject<PublicationI[]> =
    new BehaviorSubject([]);
  constructor() {
    this.publicationsBehavior.next([
      {
        photoUserUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/publicationuser.png',
        userName: 'daniela fernández ramos',
        description: 'Me encantó la sesión de fotos que me hizo mi amigo 😍🥺',
        date: 'Hace 3 días',
        photoPublicationUrl:
          'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/publicationphoto.png',
        commentsCount: 30,
        sharedCount: 5,
        likesCount: 50,
        comments: [
          {
            userPhotoUrl:
              'https://hbxtrrlccditbwhytiit.supabase.co/storage/v1/object/public/facebookconcept/publicationphotousercoments.png',
            userName: 'michael bruno',
            description: 'Esta foto esta muy cool, deberías ser modelo.',
          },
        ],
      },
    ]);
  }

  getPublications(): Observable<PublicationI[]> {
    return this.publicationsBehavior.asObservable();
  }
}
