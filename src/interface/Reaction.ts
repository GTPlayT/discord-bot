import { Emoji } from './Emoji.ts'
export interface Reaction{
    count: number;
    me: boolean;
    emoji: Emoji;
}