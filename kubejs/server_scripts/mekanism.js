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
        C:'draconicevolution:draconium_block'
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

    //Creative Energy Cube
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
          'FEDEF',
          'EBCBE',
          'DCACD',
          'EBCBE',
          'FEDEF'
          ],
          key: {
            A: Ingredient.of('kubejs:-null-').toJson(),
            B: Ingredient.of('mekanism:ultimate_energy_cube').toJson(),
            C: Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            D: Ingredient.of('mekanism:ultimate_induction_provider').toJson(),
            E: Ingredient.of('kubejs:energized_pure_element_144_ium').toJson(),
            F: Ingredient.of('mekanism:sps_casing').toJson()
        },
        result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'),
        acceptMirrored: false
      }).id('144craft:mekanism/creative_energy_cube')
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