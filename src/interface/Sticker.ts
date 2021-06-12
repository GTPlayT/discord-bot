export interface Sticker{
    id: number;
    pack_id: number;
    name: string;
    description: string;
    tags?: string;
    asset: string;
    preview_asset: string;
    format_type: number;
}