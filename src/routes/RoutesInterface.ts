import React from 'react';

import { UserRole } from '../models/UserRoles';

export interface RoutesInterface {
  path: string;
  ele: React.ReactNode;
  availability?: UserRole[];
}
