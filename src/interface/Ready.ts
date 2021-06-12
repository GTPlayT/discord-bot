import { User } from  './User.ts'
export interface Ready{
    v: number;
    user: User;
    private_channels: [];
    guilds: [];
    session_id: string;
    shard: [number];
    application: any;
}