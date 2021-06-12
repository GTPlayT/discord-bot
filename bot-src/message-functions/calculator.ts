export default async function(message: any, client: any, value: any) {
    if (value){
        try {
            const output = eval(value)
            await client.send(message.channel_id, `The output is: **${output}**`) 
        } catch {
            await client.send(message.channel_id, `Error due to invalid operation`) 
        }
        return
    }
    const components = [
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "7",
                    style: 2,
                    custom_id: "7"
                },
                {
                    type: 2,
                    label: '8',
                    style: 2,
                    custom_id: '8'
                },
                {
                    type: 2,
                    label: '9',
                    style: 2,
                    custom_id: '9'
                },
                {
                    type: 2,
                    label: '×',
                    style: 1,
                    custom_id: '*'
                },
            ]
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "4",
                    style: 2,
                    custom_id: "4"
                },
                {
                    type: 2,
                    label: '5',
                    style: 2,
                    custom_id: '5'
                },
                {
                    type: 2,
                    label: '6',
                    style: 2,
                    custom_id: '6'
                },
                {
                    type: 2,
                    label: '-',
                    style: 1,
                    custom_id: '-'
                },
            ]
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "1",
                    style: 2,
                    custom_id: "1"
                },
                {
                    type: 2,
                    label: '2',
                    style: 2,
                    custom_id: '2'
                },
                {
                    type: 2,
                    label: '3',
                    style: 2,
                    custom_id: '3'
                },
                {
                    type: 2,
                    label: '+',
                    style: 1,
                    custom_id: '+'
                },
            ]
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "clear",
                    style: 4,
                    custom_id: "clear",
                },
                {
                    type: 2,
                    label: '0',
                    style: 2,
                    custom_id: '0'
                },
                {
                    type: 2,
                    label: '÷',
                    style: 1,
                    custom_id: '/',
                },
                {
                    type: 2,
                    label: '=',
                    style: 3,
                    custom_id: '='
                },
            ]
        }
    ]

    let operation = ''
    let display = ''
    const embed = {
        color: 3092790,
        description: `*0*`
    }
    
    let send = await client.send(message.channel_id, '**this does not work on mobile devices such as iPads, iOS and Androids at the current version of Discord*', embed, components)
    let first = true
    let callback: any
    const listener = async (interaction: any) => {
        if (interaction.data.custom_id == '='){
            try { 
                const output = eval(operation)
                await client.callback(interaction.id, interaction.token, `The output is: **${output}**`, 64)
                await client.edit(send.channel_id, send.id, '', {color: 3092790, description: `The output is: **${output}**`}, components)
            } catch {
                await client.callback(interaction.id, interaction.token, `Encountered an error due to mathematical failiure.`, 64)
                await client.edit(send.channel_id, send.id, '', {color: 3092790,description: `**ERROR**`}, components)
            }
        } else if (interaction.data.custom_id == 'clear') {
            if (display[display.length - 1] == ' '){display = display.slice(0, display.length - 3)}
            else{display = display.slice(0, display.length - 1)}
            operation = operation.slice(0, operation.length - 1)
            await client.callback(interaction.id, interaction.token, `Removed the last entered value`, 64)
            await client.edit(send.channel_id, send.id, '', {color: 3092790,description: `*${display}*`}, components)
        } else {
            operation += interaction.data.custom_id
            if (interaction.data.custom_id == '*'){
                display += ' × '
                await client.callback(interaction.id, interaction.token, `Clicked operator: ×`, 64)
            } else if (interaction.data.custom_id == '/'){
                display += ' ÷ '
                await client.callback(interaction.id, interaction.token, `Clicked operator: ÷`, 64)
            } else if (interaction.data.custom_id == '+'){
                display += ' + '
                await client.callback(interaction.id, interaction.token, `Clicked operator: +`, 64)
            } else if (interaction.data.custom_id == '-'){
                display += ' - '
                await client.callback(interaction.id, interaction.token, `Clicked operator: -`, 64)
            } else { 
                display += interaction.data.custom_id
                await client.callback(interaction.id, interaction.token, `Clicked number: ${interaction.data.custom_id}`, 64)
            }
            await client.edit(send.channel_id, send.id, '', {color: 3092790,description: `*${display}*`}, components)
        }
    }
    client.on('interaction create', listener)
    await client.delay(30000)
    client.removeListener('interaction create', listener)
}