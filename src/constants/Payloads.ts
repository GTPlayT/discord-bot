export const Heartbeat = {
    op: 1, 
    d: null
};

export const Identify = {
    op: 2, 
    d: {
        token: "",
        properties: {
            $os: 'linux',
            $browser: 'deno-boi',
            $device: 'deno-boi'
        },
        presence: {
            activities: {},
            status: "online",
        }
    }
};

export const Status = {
    op: 3,
    d: {
        activities: {},
        status: "online",
    }
    
}
