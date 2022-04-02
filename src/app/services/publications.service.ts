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
          'https://lh3.googleusercontent.com/ooClW_OMA5Fv5uHCkIMTOKo0lGbghFord-0_hUebPIVExWpQ9CQsAhR0UYys__1lHsqMeYJrV0wPlSxTuBcfEQIXunbRZfOi6jzLL7emj1hHSjjrkcNKDN3JjWdhoQWB3XF-SJI6OGfdhmC3n977ubHZKRR6eh-TOeZWLD4HJ3SIX7QHUQLzZK5B_Gr1lFBb4OsKBO8xA3RPppmyFdH9Xe0gs1GG7EWLLDY5_cgeAUkssHtWdBKb8HO9zXOGq3k8APSvcXEQ7TzYxQJhWW2ov-c4j3_h45yMpimZk1oNu33JtRjoyYztJ3U8w6NBFqGncrhH9MuI3spDJyLZVMAb889Lkso8HXG3TX6endRhU7-n3KV4T8F0jXdzgbajZlBvIcLjQ3QYSJiCk3OPyZVvyVH7wPf3pdGUvWST2EMPbmfjO9sDOw0ekk8ZVGnSoRibPA_2Zi9E6hSgCGjMifPHnXmN0vTnkdduRz3j9Fa54p8TLABzl3iuiLxs5ppwTJZQrqHCZfNdPUggkfOoyl5PEPua9kXcONbX777mMf2X_f2_h8m-ORE9zQVxMRcofeILZ0F-DJSEr7_OKeM79PvUQDX8yqFYsSz6Db4t9W1bpqpNvJxKFaQH0RKQnwooLKrgEvQQMlxgwXygIRjKs-WAzLP6SvO2YYfyLt-8pctgfbBbwVpUTwQwcVHWNvKnk6FL2h5N2pyoYWwRPTUa92t-k2jTLKwlxGbsf1UJo2qVlq-F7SRX3RauGVmRAIDgnGx80jHHMvGxFa6VwSZ8DnCXZxCrK9mHHEbDOmOIUjo32166r76aOlynHCi4mY9GAbhu7ug=w641-h961-no?authuser=0',
        userName: 'daniela fernández ramos',
        description: 'Me encantó la sesión de fotos que me hizo mi amigo',
        date: 'Hace 3 días',
        photoPublicationUrl:
          'https://lh3.googleusercontent.com/GCTMQ-U7hEyaNuALI5kPqF05xBDVR5IgfUcc8f_-IlKWnnPxpdtclQuP2mfHpkBbWbFpxLj4rqT0Lc5ajfkv1zf6EpCvaTAwnqtFg6pvxCpglBBtJ2S04CgUAn8z8IdbR7q6qeEfW4Pa8XtytPUtc6U-4mN8J41O4eGYUMfQ5FpFoSLN5BED_7qYtrMhvLqpCR8TT-gjOKCGHbop6Mx4GrYThPXNgobkXfx2--HxpdoLtpAoh3RF5kVr0OcKDM3fX2lXD6-0c8-oTf1hdF1ijeXe1VVGFJiLP0XvNRFbm35iCdX-Y-Cd3ZIgVJavhQxWi2tYZO0ckRq3RXvjO5k241GXHHj3nOusn3-k8FhseKmLwHt6oLsK48ixnOTIu_PU_a8RRPBMMPGFK9joV48dUtKPPzHjmY2tbn3CBzsms9yH4O1JvUEsst0m6Ohu6J8IbFvvMebyhWRjFFQotqKt8luvtQyKwtu4etS4km74j7vnx4EoZMUzufYGznSPH6tf1NzU2a1_SMEVglfUeBAxo-V-piOBwV0BuIyaWpXC3DQ6y9p8_h2dg09-niABCTIY9rDBOxa74G8RxwSR0fIWyRWAJK2bcYG9CBnR-4LAs-0fneQ94A-1VmnIhsjC8QhL4D4ZOZTHyvkaYYq0tQBsv7pUdyitbz1YhbbtGarjcRECXZzwlZvHef99OqxNaj_d-OTBPtAffOzQDG8pytQCy13xmtvZI-_aWIGrdcn3wDUvIHUeU-a4E_lv4_Xo5fCaU9krDd-EVOXX5J3ng0xI8Zi9EixtIgbYekY7CAiX-wlw89VzNfKU5X4vb4hMqwBiWsA=w265-h331-no?authuser=0',
        commentsCount: 30,
        sharedCount: 5,
        likesCount: 50,
        comments: [
          {
            userPhotoUrl:
              'https://lh3.googleusercontent.com/IRuBZ1yvjUXyZhMhakooAFXABbPWdBVJSyRDxbDSSEQXYz6aD_ktuXfzbzP1OcIoTpvhAMKwxmZJU77SGpGFyxC3GD3xvhb_lJBCEybVOUA8QUMVxnC0fHeh5ruOIqHEC0I7oqYTVYK15PlODZxQTeh_uZLGnNzHb1ZspUBCLSiXTJJyTVyb4ZesdPyjhv4myiEhn3G343Ehubixtp8nKD-po94w7xSq1JbBfewIsgeRHHoMEnjK73fiU4ZH13rneUhAuXXmUkgt6DhFi4slOQ9sUDc85NjrMi4Uceksf8itei9xaIsFPpSgL6de1edFu138ggKcg0ECZO_d09a9AEwRb9EyO1tvBVSi62LsNv1BjRofAPuA1BX-lc8ObAcSfYKEnHoLcxT2zEdX39XZ1W53vKsTLjjmy_GIvtrr0mNs-4Gz64M_txAaWEy8JlR8o33cnHqXgSaDhTpEw7yDLhg4KCyr4oAPOW-mwerE7hJjUTc4FCRD5lW4txvW-Jqij2woqZYla7wS9JiekIhOItPW9Vd5l_j6jyR1_1i2-MHU9k275_jjOTwMEK1_b9muW05ShJt1XtoEBcodMQlg7zORyWggFcWmeNEv1Lipriqh4eEekjbmlSvQbGROfONpDvoaQX94F77I1oSiRI1NQBZrvDVqW8cdnP6YMJemth8vhPcg-LgisoWS50IPfNvqCj3Ad5e5aT3QIgnJUYTDtSmL7D67dR5q7sWHJ-6Um4jNOkXy2244iCD75Ux30z9eJgbo3Vt-eYl1DJSFFDL8_jCUb88OYH49a7PK7UwjpO-E5It6uC8q6y_WmXuc-gULYPQ=w497-h331-no?authuser=0',
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
