import { User, Role } from './User.ts'
export interface Emoji{
    id: number;
    name: string;
    roles?: [Role];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}