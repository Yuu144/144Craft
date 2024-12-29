//onEvent('recipes', event => {

//Mekanism Start
ServerEvents.recipes(event => {
    //Gas Burning Generator
    event.shaped('mekanismgenerators:gas_burning_generator', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A:'mekanism:ingot_osmium',
        B:'mekanism:alloy_infused',
        C:'mekanismgenerators:bio_generator',
        D:'mekanism:electrolytic_core'
    })
})

ServerEvents.recipes(event => {
    [
        'mekanismgenerators:generator/gas_burning'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})