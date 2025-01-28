export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  bio?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
