import { Member } from './User.ts'

export interface Voice{
    guild_id?: number;
    channel_id?: number;
    user_id: number;
    member?: Member;
    session_id: string;
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    self_stream?: boolean;
    self_video: boolean;
    suppress: boolean;
}