ServerEvents.recipes(event => {
    //Draconic Endshelf
    event.shaped('apotheosis:draconic_endshelf', [
        'CAC',
        'DBD',
        'CDC'
    ],{
        A: 'minecraft:dragon_head',
        B: 'apotheosis:endshelf',
        C: 'draconicevolution:draconium_ingot',
        D: 'minecraft:ender_pearl'
    })
})

ServerEvents.recipes(event => {
    [
        'apotheosis:draconic_endshelf'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})