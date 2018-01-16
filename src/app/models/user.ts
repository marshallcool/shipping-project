export interface User {
  id: number;
  mail: string;
  password: string;
  // activated: boolean;
  // confirmed: boolean;
  // profile: UserProfile;
}

export interface UserProfile {
  name: string;
}
