export * from './account.service';
import { AccountService } from './account.service';
export * from './role.service';
import { RoleService } from './role.service';
export const APIS = [AccountService, RoleService];
