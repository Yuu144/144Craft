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
})

//remove
ServerEvents.recipes(event => {
    [
        'ae2:network/blocks/inscribers'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})
