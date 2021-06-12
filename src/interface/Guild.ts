import { Role, Member, Presence } from './User.ts'
import { Emoji } from './Emoji.ts'
import { Voice } from './Voice.ts'
import { Channel } from './Channel.ts'

export interface Guild{
    id: number;
    name: string;
    icon?: string;
    icon_has?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id: number;
    permissions?: string;
    region: string;
    afk_channel_id: number;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: number;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: [Role];
    emojis: [Emoji];
    features: Features;
    mfa_level: number;
    application_id?: number;
    system_channel_id?: number;
    system_channel_flags: number;
    rules_channel_id?: number;
    joined_at?: number;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states?: [Voice];
    members?: [Member];
    channels?: [Channel];
    presences?: [Presence];
    max_presences?: number;
    max_members?: number;
    vanity_url_code?: string;
    description?: string;
    banner?: string;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id?: number;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: {description?: string, welcome_channels: [{channel_id: number, description: string, emoji_id: number, emoji_name: string}]}
};

export interface Features{
    INVITE_SPLASH?: boolean;
    VIP_REGIONS?: boolean;
    VANITY_URL?: boolean;
    VERIFIED?: boolean;
    PARTNERED?: boolean;
    COMMUNITY?: boolean;
    COMMERCE?: boolean;
    NEWS?: boolean;
    DISCOVERABLE?: boolean;
    FEATURABLE?: boolean;
    ANIMATED_ICON?: boolean;
    BANNER?: boolean;
    WELCOME_SCREEN_ENABLED?: boolean;
    MEMBER_VERIFICATION_GATE_ENABLED?: boolean;
    PREVIEW_ENABLED?: boolean;
};