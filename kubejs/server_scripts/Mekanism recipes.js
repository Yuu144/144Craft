//onEvent('recipes', event => {

//Mekanism Start create
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

//Mekanism ADVANCED create
ServerEvents.recipes(event => {
    //Atomic Disassembler
    event.shaped('mekanism:atomic_disassembler',[
        'ABA',
        'ACA',
        ' D '
    ],{
        A:'mekanism:alloy_reinforced',
        B:'mekanism:basic_induction_cell',
        C:'mekanism:alloy_atomic',
        D:'mekanism:ingot_refined_obsidian'
    })


})

//Mekanism start delete
ServerEvents.recipes(event => {
    [
        'mekanismgenerators:generator/gas_burning'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})

//Mekanism ADVANCED delete
ServerEvents.recipes(event => {
    [
        'mekanism:atomic_disassembler'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})