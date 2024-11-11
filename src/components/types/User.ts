export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    createdDate: string; // timestamp de criação
    email: string;
    password: string;
    job: string;
    socialMedia: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  }