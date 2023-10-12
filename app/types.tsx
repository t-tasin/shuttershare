export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface PostWithProfile {
  id: string;
  user_id: string;
  media: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

////////////////////////////////////////////////
////////////////////////////////////////////////

// COMPONENT TYPES

export interface PostMainCompTypes {
  post: PostWithProfile;
}

//LAYOUT INCLUDE TYPES

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}
