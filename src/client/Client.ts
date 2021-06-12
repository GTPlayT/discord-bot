import EventEmitter from 'https://deno.land/x/events/mod.ts';
import WebSocketManager from '../ws/WebSocketManager.ts';
import { Constants} from '../constants/Constants.ts'
import { Message, Reply, Callback, Webhook, Together} from "../constants/Events.ts";
import { melt, MeltedSnowflake, TWITTER_EPOCH } from "../util/Snowflake.ts";
import { ERROR } from "../constants/Errors.ts";


export default class Client extends EventEmitter {
    public token: string = '';
    private socket: WebSocketManager = new WebSocketManager(this);


    private _user: any = {};
    private _guilds: any = [];
    private _sessionID: string = '';
    private _application: any = {};
    private _owner: string = '';

// ---------------------------
// CLIENT RUNNING FUNCTIONS
// ---------------------------

    async login(token: string){
        this.socket.login(token)
        this.token = token
    };

    async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    };

    async status(name: string, status:string, type: number,){
        if(status){status=status}else{status="online"}
        this.socket.status(name, type, status)
    };

    set user(_user: any){
        _user.avatarUrl = this.avatarUrl(_user.id, _user.avatar, 1024)
        this._user = _user;
    }

    get user(): any{
        return this._user
    }

    set guilds(_guilds: any){
        this._guilds = _guilds
    }

    get guilds(){
        return this._guilds
    }

    set sessionID(_sessionID: string){
        this._sessionID = _sessionID
    }

    get sessionID(): string{
        return this._sessionID;
    }

    set application(_application: any){
        this._application = _application
    }

    get application(): any{
        return this._application
    }

    set owner(_owner: string){
        this._owner = _owner 
    }

    get owner(): string {
        return this._owner
    }

    avatarUrl(id: string | number, avatar: string, size: number = 1024){
        if (avatar.slice(0,2) == 'a_'){
            return `${Constants.CND}/avatars/${id}/${avatar}.gif?size=${size}`;
        } else {
            return `${Constants.CND}/avatars/${id}/${avatar}.png?size=${size}`;
        };
    };

    iconUrl(id: string | number, icon: string, size: number = 1024){
        if (icon.slice(0,2) == 'a_'){
            return `${Constants.CND}/icons/${id}/${icon}.gif?size=${size}`;
        } else {
            return `${Constants.CND}/icons/${id}/${icon}.png?size=${size}`;
        };
    };

    bannerUrl(id: string | number, banner: string, size: number = 1024){
        if (banner.slice(0,2) == 'a_'){
            return `${Constants.CND}/banners/${id}/${banner}.gif?size=${size}`;
        } else {
            return `${Constants.CND}/banners/${id}/${banner}.png?size=${size}`;
        };
    };    
    
    CND(){
        return Constants.CND
    };

    snowflake(ID: string){
        const res: MeltedSnowflake = melt(ID, TWITTER_EPOCH);
        return res
    };

    async fetch(URL: string, Method: string, Body?: any){
        const headers = {'Content-Type': 'application/json', 'Authorization': `Bot ${this.token}`};
        try{
            const response = await fetch(`${Constants.API}/${URL}`, {
                method: Method,
                headers,
                body: JSON.stringify(Body),
            });
            let data: any;
            try {
                data = await response.json();
            } catch (err){
                data = await response;
            }
            if (!response.ok) {
                if (response.status == 429){
                    return await this.delay(data.retry_after*1000);             
                } else {
                    throw new Error(response.statusText)
                }
            }
            if (!isNaN(data.code)){
                throw new Error(ERROR[data.code])
            } else {
                return data;
            };
        } catch (error){
            console.log(error)
        };
    };


// ---------------------------
// POST REQUESTS
// ---------------------------

    async send(channelID: string | number, content: string, embed?: any, components?: any){
        Message.content = content;
        Message.embed = embed;
        Message.components = components;
        const URL = `channels/${channelID}/messages`;
        return await this.fetch(URL, 'POST', Message);
    };

    async reply(channelID: string | number, messageID: string | number, content: string , embed?: any, components?: any){
        Reply.content = content;
        Reply.embed = embed;
        Reply.components = components;
        Reply.message_reference.channel_id = channelID.toString();
        Reply.message_reference.message_id = messageID.toString();
        const URL = `channels/${channelID}/messages`;
        return await this.fetch(URL, 'POST', Reply);
    };

    async webhookExecute(webhookID: string | number, webhookToken: string, content: string, embeds?: any, username: string = '', avatar_url: string = '', components?: any){
        Webhook.content = content;
        Webhook.embeds = embeds;
        Webhook.username = username;
        Webhook.avatar_url = avatar_url;
        Webhook.components = components;
        const URL = `webhooks/${webhookID}/${webhookToken}`
        return await this.fetch(URL, 'POST', Webhook);
    };

    async createSlashGlobal(applicationID: string | number, Slash: any){
        const URL = `applications/${applicationID}/commands`;
        return await this.fetch(URL, 'POST', Slash);
    };

    async createSlashGuild(applicationID: string | number, guildID: string | number, Slash: any){
        const URL = `applications/${applicationID}/guilds/${guildID}/commands`;
        return await this.fetch(URL, 'POST', Slash);
    };

    async callback(interactionID:string | number, interactionToken: string, content: string, flags: number = 0, embeds?: any, components?: any){
        Callback.data.content = content;
        Callback.data.embeds = embeds;
        Callback.data.components = components;
        Callback.data.flags = flags;
        const URL = `interactions/${interactionID}/${interactionToken}/callback`;
        return await this.fetch(URL, 'POST', Callback);
    };

    async longCallback(interactionID:string | number, interactionToken: string, content: string, embeds?: any, components?: any){
        Callback.data.content = content;
        Callback.type = 5;
        Callback.data.embeds = embeds;
        Callback.data.components = components;
        const URL = `interactions/${interactionID}/${interactionToken}/callback`;
        return await this.fetch(URL, 'POST', Callback);
    };

    async deleteMessages(channelID: string | number, arrayMessages: any){
        const URL = `channels/${channelID}/messages/bulk-delete`;
        const body = {messages: arrayMessages}
        return await this.fetch(URL, 'POST', body);
    };

    async createWebhook(channelID: string | number, name: string, avatar: string){
        const Body = {name: name, avatar: avatar};
        const URL = `channels/${channelID}/webhooks`;
        return await this.fetch(URL, 'POST', Body);
    };

    async createDM(userID: string | number){
        const URL = `users/@me/channels`;
        const Body= {'recipient_id': userID}
        return await this.fetch(URL, 'POST', Body);
    };

    async createGuildChannel(guildID: string | number, Body: any){
        const URL = `guilds/${guildID}/channels`;
        return await this.fetch(URL, 'POST', Body);
    };

    async triggerType(channelID: string | number){
        const URL = `channels/${channelID}/typing`;
        return await this.fetch(URL, 'POST');
    };

    async youtubeTogether(channelID: string | number){
        Together.target_application_id = '755600276941176913'
        const URL = `channels/${channelID}/invites`;
        return await this.fetch(URL, 'POST', Together);
    }

    async fishingTogether(channelID: string | number){
        const URL = `channels/${channelID}/invites`;
        Together.target_application_id = '814288819477020702'
        return await this.fetch(URL, 'POST', Together);
    }

    async betrayalTogether(channelID: string | number){
        const URL = `channels/${channelID}/invites`;
        Together.target_application_id = '773336526917861400'
        return await this.fetch(URL, 'POST', Together);
    }

    async pokerTogether(channelID: string | number){
        const URL = `channels/${channelID}/invites`;
        Together.target_application_id = '755827207812677713'
        return await this.fetch(URL, 'POST', Together);
    }

// ---------------------------
// GET REQUESTS
// ---------------------------

    async getGuild(guildID: string| number){
        const URL = `guilds/${guildID}`;
        return await this.fetch(URL, 'GET');
    };

    async getGuildPreview(guildID: string | number){
        const URL = `guilds/${guildID}/preview`
        return await this.fetch(URL, 'GET');
    };

    async getGuildMember(guildID: string | number, userID: string | number){
        const URL = `guilds/${guildID}/members/${userID}`;
        return await this.fetch(URL, 'GET');
    };

    async getChannelMessages(channelID: string | number, limit: number = 50){
        let URL = `channels/${channelID}/messages?limit=${limit}`;
        return await this.fetch(URL, 'GET');
    };

    async getChannelMessage(channelID: string | number, messageID: string | number){
        let URL = `channels/${channelID}/messages/${messageID}`;
        return await this.fetch(URL, 'GET');
    };

    async getUser(userID: string | number){
        const URL = `users/${userID}`;
        return await this.fetch(URL, 'GET');
    };

    async getChannelWebhooks(channelID: string | number){
        const URL = `channels/${channelID}/webhooks`;
        return await this.fetch(URL, 'GET');
    };

    async getGuildWebhooks(guildID: string | number){
        const URL = `guilds/${guildID}/webhooks`;
        return await this.fetch(URL, 'GET');
    };

    async getCurrentUser(){
        const URL = `users/@me`;
        return await this.fetch(URL, 'GET');
    };

    async getCurrentUserGuilds(){
        const URL = `users/@me/guilds`;
        return await this.fetch(URL, 'GET');
    };

    async getCurrentUserConnections(){
        const URL = `users/@me/connections`;
        return await this.fetch(URL, 'GET');
    };

    async getUserConnections(userID: string | number){
        const URL = `users/${userID}/connections`;
        return await this.fetch(URL, 'GET');
    };

    async getInteractionsGuild(applicationID: string | number, guildID: string | number){
        const URL = `applications/${applicationID}/guilds/${guildID}/commands`;
        return await this.fetch(URL, 'GET');
    };

    async getBans(guildID: string | number){
        const URL = `guilds/${guildID}/bans`;
        return await this.fetch(URL, 'GET');
    };

    async getRoles(guildID: string | number){
        const URL = `guilds/${guildID}/roles`;
        return await this.fetch(URL, 'GET');
    };

    async getGuildChannels(guildID: string | number){
        const URL = `guilds/${guildID}/channels`;
        return await this.fetch(URL, 'GET');
    };

    async getGuildInvites(guildID: string | number){
        const URL = `guilds/${guildID}/invites`;
        return await this.fetch(URL, 'GET');
    };

    async getAuditLog(guildID: string | number, params?: string){
        const URL = `guilds/${guildID}/audit-logs?` + params;
        return await this.fetch(URL, 'GET');
    };

    async getGuildMembers(guildID: string | number, params?: string){
        const URL = `guilds/${guildID}/members?` + params;
        return await this.fetch(URL, 'GET');
    }

// ---------------------------
// DELETE REQUESTS
// ---------------------------

    async deleteMessage(channelID: string | number, messageID: string | number){
        const URL = `channels/${channelID}/messages/${messageID}`
        return await this.fetch(URL, 'DELETE');
    };

    async removeRole(guildID: string | number, userID: string | number, roleID: string | number){
        const URL = `guilds/${guildID}/members/${userID}/roles/${roleID}`;
        return await this.fetch(URL, 'DELETE');
    };

    async deleteWebhook(webhookID: string | number){
        const URL = `webhooks/${webhookID}`;
        return await this.fetch(URL, 'DELETE');
    };

    async deleteInteractionsGuild(applicationID: string | number, guildID: string | number, commandID: string | number){
        const URL = `applications/${applicationID}/guilds/${guildID}/commands/${commandID}`;
        return await this.fetch(URL, 'DELETE');
    };

    async deleteRole(guildID: string | number, userID: string | number, roleID: string | number){
        const URL = `guilds/${guildID}/members/${userID}/roles/${roleID}`;
        return await this.fetch(URL, 'DELETE');
    };

    async removeMember(guildID: string | number, userID: string | number){
        const URL = `guilds/${guildID}/members/${userID}`;
        return await this.fetch(URL, 'DELETE');
    };

    async deleteReaction(channelID: string | number, messageID: string | number, emojiName: string, emojiID: string | number){
        const emoji = encodeURIComponent(`${emojiName}:${emojiID}`)
        const URL = `channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`
        return await this.fetch(URL, 'DELETE');        
    };

    async deleteUserReactions(channelID:string | number, messageID: string | number, emojiName: string, emojiID: string | number, userID: string | number){
        const emoji = encodeURIComponent(`${emojiName}:${emojiID}`);
        const URL = `channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}`;
        return await this.fetch(URL, 'DELETE');        

    }

    async deleteAllReactions(channelID: string | number, messageID: string | number){
        const URL = `channels/${channelID}/messages/${messageID}/reactions`;
        return await this.fetch(URL, 'DELETE');        

    }

// ---------------------------
// PUT REQUESTS
// ---------------------------

    async triggerTyping(channelID: string | number){
        const URL = `/channels/${channelID}/typing`;
        return await this.fetch(URL, 'PUT');
    };
    
    async addReaction(channelID: string | number, messageID: string | number, emojiName: string, emojiID: string | number){
        const emoji = encodeURIComponent(`${emojiName}:${emojiID}`)
        const URL = `channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`
        return await this.fetch(URL, 'PUT');        
    };

    async addPin(channelID: string | number, messageID: string | number){
        const URL = `channels/${channelID}/pins/${messageID}`
        return await this.fetch(URL, 'PUT');
    };

    async addRole(guildID: string | number, userID: string | number, roleID: string | number){
        const URL = `guilds/${guildID}/members/${userID}/roles/${roleID}`;
        return await this.fetch(URL, 'PUT');
    };

    async createBan(guildID: string | number, userID: string | number, params?: any){
        const URL = `guilds/${guildID}/bans/${userID}`;
        return await this.fetch(URL, 'PUT', params);
    };

// ---------------------------
// PATCH REQUESTS
// ---------------------------

    async edit(channelID: string | number, messageID: string | number, content: string, embed?: any,components?: any){
        Message.content = content;
        Message.embed = embed;
        Message.components = components;
        const URL = `channels/${channelID}/messages/${messageID}`;
        return await  this.fetch(URL, 'PATCH', Message);
    };
    
    async modifyCurrentUser(Patch: any){
        const URL = `users/@me`;
        return await this.fetch(URL, 'PATCH', Patch);
    };

    async modifyCurrentUserNick(guildID: string | number, Nick: string){
        const URL = `guilds/${guildID}/members/@me/nick`;
        return await this.fetch(URL, 'PATCH', {nick: Nick});
    };

    async modifyGuildMember(guildID: string | number, userID: string | number, Patch: any){
        const URL = `guilds/${guildID}/members/${userID}`;
        return await this.fetch(URL, 'PATCH', Patch);
    };

    async callbackEdit(interactionID: string | number, interactionToken: string, content: string, embed?: any, components?: any){
        Message.content = content;
        Message.embed = embed;
        Message.components = components;
        const URL = `webhooks/${this._application.id}/${interactionToken}/messages/${interactionID}`
        return await this.fetch(URL, 'PATCH', Message);
    };

};