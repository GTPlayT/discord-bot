import { User, Member, Role, Mention } from './User.ts'
import { Channel } from './Channel.ts'
import { Attachment } from './Attachment.ts'
import { Embed } from './Embed.ts'
import { Reaction } from './Reaction.ts'
import { Sticker } from './Sticker.ts'

export interface Message {
    id: string | number;
    channel_id: string;
    guild_id ?: number;
    author: User;
    member: Member;
    content: string;
    timestamp: string | number;
    edited_timestamp?: string | number;
    tts: boolean;
    mention_everyone: boolean;
    mentions?: [Mention];
    mention_roles?: [Role];
    mention_channels?: [Channel];
    attachments?: [Attachment];
    embeds?: [Embed]
    reactions?: [Reaction];
    nonce?: string;
    pinned: boolean;
    webhook_id?: string | number;
    type: string | number;
    activity?: Activity;
    application?: Application;
    message_reference?: Reference;
    flags?: string | number;
    stickers?: Sticker;
    referenced_message?: Message;
};

export interface Activity{
    type: number;
    party_id?: string;
};

export interface Application{
    id: number;
    cover_image?: string;
    description: string;
    icon: string;
    name: string;
};

export interface Reference{
    message_id?: number;
    channel_id?: number;
    guild?: number;
    fail_if_not_exists?: boolean;
};