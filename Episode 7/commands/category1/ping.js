module.exports = {
    name: "ping",
    description: "pong",
    guildOnly: "747526604116459691",
    category: "category1",
    run: async({client, respond, edit}, args) => {
        respond("pong!")
    }
}