import { Overwrite } from './Overwrite.ts'
import { User } from './User.ts'

export interface Channel{
    id: number;
    type: number;
    guild_id?: number;
    position?: number;
    permission_overwrites?: [Overwrite];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: number;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: [User];
    icon?: string;
    owner_id?: number;
    application_id?: number;
    parent_id?: number;
    last_pin_timestamp?: number;
}