import { Emoji } from './Emoji.ts'
export interface User {
    id: number;
    username: string;
    discriminator: number;
    avatar: string;
    bot?: boolean;
    system ?: boolean;
    mfa_enabled ?: boolean;
    locale ?: string;
    verified ?: boolean;
    email ?: string;
    flags ?: number;
    premium_type ?: number;
    public_flags ?: number;
    avatar_url(): string;
    created_at(): string;
};

export interface Member{
    user?: User;
    nick?: string;
    roles: [number];
    joined_at: number;
    premium_since?: number;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
};

export interface Role{
    id: number;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: [Tag];
};

export interface Tag{
    bot_id?: number;
    integration_id?: number;
    premium_subscriber?: number;
};

export interface Mention{
    id: number;
    username: string;
    discriminator: number;
    avatar: string;
    bot?: boolean;
    system ?: boolean;
    mfa_enabled ?: boolean;
    locale ?: string;
    verified ?: boolean;
    email ?: string;
    flags ?: number;
    premium_type ?: number;
    public_flags ?: number;
    avatar_url(): string;
    member?: Member;
}

export interface Presence{
    user: User;
    guild_id: number;
    status: string;
    activity: Acitvity;
    client_status: {destop?: string, mobile?: string, web?: string};
};

export interface Acitvity{
    name: string;
    type: number;
    url?: string;
    created_at: number;
    timestamps?: {start?: number, end?: number};
    application_id?: number;
    details?: string;
    state?: string;
    emoji?: Emoji;
    party?: {id?: string, size?: [number]};
    assets?: {large_image?: string, large_text?: string,small_image?: string, small_text?: string};
    secrets?: {join?: string, spectate?: string, match?: string};
    instance?: boolean;
    flags?: number;
}