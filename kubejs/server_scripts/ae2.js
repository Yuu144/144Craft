//onEvent('recipes', event => {

//create
ServerEvents.recipes(event => {
    //Inscriber
    event.shaped('ae2:inscriber', [
        'ABA',
        'C A',
        'ABA'
    ],{
        A:'minecraft:iron_ingot',
        B:'minecraft:piston',
        C:'minecraft:copper_ingot'
    })

    //ME Crontroller
    event.shaped('ae2:controller', [
        'DBE',
        'BCB',
        'ABA'
    ],{
        A:'ae2:smooth_sky_stone_block',
        B:'ae2:fluix_crystal',
        C:'refinedstorage:controller',
        D:'ae2:engineering_processor',
        E:'ae2:calculation_processor'
    })
})

//remove
ServerEvents.recipes(event => {
    [
        'ae2:network/blocks/inscribers',
        'ae2:network/blocks/controller'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})
