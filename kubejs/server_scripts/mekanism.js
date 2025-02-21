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
    
    //Reactor Controller
    event.shaped('mekanismgenerators:fusion_reactor_controller',[
        'ABA',
        'CDC',
        'CCC'
    ],{
        A:'mekanism:ultimate_control_circuit',
        B:'cataclysm:ignitium_ingot',
        C:'mekanismgenerators:fusion_reactor_frame',
        D:'mekanism:basic_chemical_tank'
    })

    //Fission Fuel Assembly
    event.shaped('mekanismgenerators:fission_fuel_assembly',[
        'ABA',
        'ACA',
        'ABA'
    ],{
        A:'#forge:ingots/lead',
        B:'#forge:ingots/steel',
        C:'cataclysm:witherite_ingot'
    })

    //Supercharged Coil
    event.shaped('mekanism:supercharged_coil',[
        'ABA',
        'CDC',
        'EEE'
    ],{
        A:'minecraft:copper_ingot',
        B:'kubejs:element_144-ium',
        C:'mekanism:ultimate_control_circuit',
        D:'mekanism:laser',
        E:'mekanism:pellet_polonium'
    })

    //Mekatana
    event.shaped('mekaweapons:mekatana',[
        'ABA',
        'CDC',
        'EFE'
    ],{
        A:'mekanism:ultimate_control_circuit',
        B:'mekaweapons:katana_blade',
        C:'mekanism:hdpe_sheet',
        D:'cataclysm:abyssal_egg',
        E:'mekanism:pellet_polonium',
        F:'mekanism:basic_induction_cell'
    })

    //Katana Blade
    event.shaped('mekaweapons:katana_blade',[
        '  A',
        'BA ',
        'CB '
    ],{
        A:'draconicevolution:draconium_ingot',
        B:'mekanism:alloy_atomic',
        C:'mekanism:ingot_refined_obsidian'
    })

})

//Mekanism start delete
ServerEvents.recipes(event => {
    [
        'mekanismgenerators:generator/gas_burning',
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})

//Mekanism ADVANCED delete
ServerEvents.recipes(event => {
    [
        'mekanism:atomic_disassembler',
        'mekanismgenerators:reactor/controller',
        'mekanismgenerators:fission_reactor/fuel_assembly',
        'mekanism:supercharged_coil',
        'mekaweapons:katana_blade',
        'mekaweapons:mekatana'
    ]
    .forEach((recipeID) => event.remove({id: recipeID}));
})