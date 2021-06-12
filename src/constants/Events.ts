export const Message =  {
    content: '',
    embed: {},
    components: [],
    tts: false,
};
export const Reply =  {
    content: '',
    embed: {},
    tts: false,
    components: [],
    message_reference: {
        message_id: '', 
        channel_id: '',
    }
};
export const Slash = {
    name: '',
    description: '',
    options: {},
}
export const Callback = {
    type: 4,
    data: {
        content: '',
        embeds: [],
        components: [],
        flags: 0
    }
}
export const Webhook =  {
    content: '',
    embeds: [{}],
    username: '',
    avatar_url: '',
    components: [],
    tts: false,
};
export const Together = {
    max_age: 86400,
    max_uses: 0,
    target_application_id: "755600276941176913",
    target_type: 2,
    temporary: false,
    validate: null
}
