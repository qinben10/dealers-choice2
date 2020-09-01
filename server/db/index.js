const db = require('./db')
const Sequelize = require('sequelize')

const Games = require('./models/games')
const Developers = require('./models/developers')
const Platforms = require('./models/platforms')

Games.belongsTo(Developers)
Games.belongsTo(Platforms)
Developers.hasMany(Games)
Platforms.hasMany(Games)

const syncAndSeed = async() =>{
    await db.sync({force: true});
    const [windows, ps, xbox, nintendo] = await Promise.all([
        Platforms.create({name:'Windows'}),
        Platforms.create({name:'Ps'}),
        Platforms.create({name:'Xbox'}),
        Platforms.create({name:'Nintendo'}),
    ])
    const [blizzard, atlus, gameFreak, bungie] = await Promise.all([
        Developers.create({name: 'Blizzard'}),
        Developers.create({name: 'Atlus'}),
        Developers.create({name: 'Game Freak'}),
        Developers.create({name: 'Bungie'})
    ])

    await Games.create({name:'Persona 5',genre:'role-play game',platformsId: 2, developersId: 2})
    await Games.create({name:'Warcraft III: Reign of Chaos',genre:'real-time strategy',platformsId: 1, developersId: 1})
    await Games.create({name:'Halo 3',genre:'first-person shooter',platformsId: 3, developersId: 4})
    await Games.create({name:'Pokémon Sword and Shield',genre:'role-play game',platformsId: 4, developersId: 3})
}
module.exports = {
    models:{
    Games,
    Developers,
    Platforms,
    },
    syncAndSeed
}
