export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string; // timestamp de criação
    email: string;
    password: string;
    jobPosition: string;
    profilePicture:string;
    socialMedia: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  }