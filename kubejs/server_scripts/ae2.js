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

    //Creative Storage
    event.shaped('ae2:creative_item_cell', [
        'ABA',
        'BCB',
        'DDD'
    ],{
        A:'ae2:quartz_vibrant_glass',
        B:'ae2:sky_dust',
        C:'kubejs:-null-',
        D:'megacells:item_storage_cell_256m'
    })
})

//remove
ServerEvents.recipes(event => {
    [
        'ae2:network/blocks/inscribers',
        'advanced_ae:quantum_helmet',
        'advanced_ae:quantum_chest',
        'advanced_ae:quantum_leggings',
        'advanced_ae:quantum_boots'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})