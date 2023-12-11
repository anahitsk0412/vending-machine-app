import { UserRole } from './UserRoles';

export interface User {
  id: number;
  username: string;
  role: UserRole;
  deposit: number;
  change?: number[];
}
