export interface PublicationI {
  photoUserUrl: string;
  userName: string;
  date: string;
  description: string;
  photoPublicationUrl?: string;
  commentsCount?: number;
  sharedCount?: number;
  likesCount?: number;
  comments?: CommentI[];
}

interface CommentI {
  userPhotoUrl: string;
  userName: string;
  description: string;
}
