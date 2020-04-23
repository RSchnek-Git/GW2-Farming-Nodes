const {db, Nodes} = require('./server/db/models');

async function seed() {
    await db.sync({force: true})
    console.log('db synced!')

    const nodes = await Promise.all([
        Nodes.create({
            id: 1,
            oreType: "Iron",
            area: "Brisban Wildlands",
            waypoint: "GallowFields Waypoint",
            code: "[&BGMAAAA=]"
        }),
        Nodes.create({
            id: 2,
            oreType: "Iron",
            area: "Harathi Hinterlands",
            waypoint: "Demetra Waypoint",
            code: "[&BKsAAAA=]"
        }),
        Nodes.create({
            id: 3,
            oreType: "Iron",
            area: "Gendarran Fields",
            waypoint: "Icegate Waypoint",
            code: "[&BJMBAAA=]"
        }),
        Nodes.create({
            id: 4,
            oreType: "Iron",
            area: "Lornar's Pass",
            waypoint: "Demetra Waypoint",
            code: "[&BGMAAAA=]"
        }),
        Nodes.create({
            id: 5,
            oreType: "Platinum",
            area: "Bloodtide Coast",
            waypoint: "Firthside Vigil Waypoint",
            code: "[&BKoBAAA=]"
        }),
        Nodes.create({
            id: 6,
            oreType: "Platinum",
            area: "Sparkfly Fen",
            waypoint: "Ocean's Gullet Waypoint",
            code: "[&BMkBAAA=]"
        }),
        Nodes.create({
            id: 7,
            oreType: "Platinum",
            area: "Sparkfly Fen",
            waypoint: "Flamefrog Waypoint",
            code: "[&BMwBAAA=]"
        }),
        Nodes.create({
            id: 8,
            oreType: "Platinum",
            area: "Sparkfly Fen",
            waypoint: "Flamefrog Waypoint",
            code: "[&BMwBAAA=]"
        }),
        Nodes.create({
            id: 9,
            oreType: "Platinum",
            area: "Mount Maelstrom",
            waypoint: "Criterion Waypoint",
            code: "[&BMkCAAA=]"
        }),
        Nodes.create({
            id: 10,
            oreType: "Platinum",
            area: "Mount Maelstrom",
            waypoint: "Old Sledge Site Waypoint",
            code: "[&BNQCAAA=]"
        }),
        Nodes.create({
            id: 11,
            oreType: "Platinum",
            area: "Timberline Falls",
            waypoint: "Thistlereed Waypoint",
            code: "[&BFECAAA=]"
        }),
        Nodes.create({
            id: 12,
            oreType: "Iron",
            area: "Dredgehaunt Cliffs",
            waypoint: "Wyrmblood Waypoint",
            code: "[&BGUCAAA=]"
        }),
        Nodes.create({
            id: 13,
            oreType: "Iron",
            area: "Snowden Drifts",
            waypoint: "Snowhawk Landing Waypoint",
            code: "[&BL8AAAA=]"
        }),
        Nodes.create({
            id: 14,
            oreType: "Iron",
            area: "Diessa Plateau",
            waypoint: "Oldgate Waypoint",
            code: "[&BF4BAAA=]"
        }),
        Nodes.create({
            id: 15,
            oreType: "Platinum",
            area: "Fireheart Rise",
            waypoint: "Breaktooth's Waypoint",
            code: "[&BBoCAAA=]"
        }),
        Nodes.create({
            id: 16,
            oreType: "Platinum",
            area: "Iron Marches",
            waypoint: "Gladefall Waypoint",
            code: "[&BO4BAAA=]"
        }),
        Nodes.create({
            id: 17,
            oreType: "Platinum",
            area: "Iron Marches",
            waypoint: "Grostogg Kraal Waypoint",
            code: "[&BO8BAAA=]"
        }),
        Nodes.create({
            id: 18,
            oreType: "Iron",
            area: "Blazeridge Steppes",
            waypoint: "Behem Waypoint",
            code: "[&BP0BAAA=]"
        }),
        Nodes.create({
            id: 19,
            oreType: "Iron",
            area: "Fields of Ruin",
            waypoint: "Helliot Mine Waypoint",
            code: "[&BEsBAAA=]"
        })
    ])

    console.log(`seeded ${nodes.length} nodes`)
    console.log(`seeded successfully.`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
    console.log('seeding...')
    try {
        await seed()
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
    runSeed()
}

module.exports = seed