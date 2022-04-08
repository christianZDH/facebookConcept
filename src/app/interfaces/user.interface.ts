export interface UserI {
  userPhotoUrl: string;
  backgroundPhotoUrl: string;
  userName: string;
  description: string;
  from: string;
  join: string;
  friendsCount: number;
}

export interface CollectionI {
  collectionPhotoUrl: string;
  description: string;
}

export interface FriendI {
  userPhotoUrl: string;
  userName: string;
}
