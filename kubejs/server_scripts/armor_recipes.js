ServerEvents.tags('item', event => {
    //Add dragon scale armor tags
    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_red_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_red_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_red_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_red_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_bronze_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_bronze_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_bronze_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_bronze_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_green_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_green_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_green_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_green_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_gray_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_gray_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_gray_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_gray_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_blue_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_blue_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_blue_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_blue_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_white_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_white_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_white_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_white_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_sapphire_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_sapphire_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_sapphire_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_sapphire_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_silver_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_silver_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_silver_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_silver_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_electric_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_electric_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_electric_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_electric_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_amythest_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_amythest_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_amythest_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_amythest_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_copper_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_copper_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_copper_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_copper_boots')

    event.add('forge:armor/dragon_scale_helmet', 'iceandfire:armor_black_helmet')
    event.add('forge:armor/dragon_scale_chestplate', 'iceandfire:armor_black_chestplate')
    event.add('forge:armor/dragon_scale_leggings', 'iceandfire:armor_black_leggings')
    event.add('forge:armor/dragon_scale_boots', 'iceandfire:armor_black_boots')

    event.add('forge:armor/dragonsteel_helmet', 'iceandfire:dragonsteel_fire_helmet')
    event.add('forge:armor/dragonsteel_chestplate', 'iceandfire:dragonsteel_fire_chestplate')
    event.add('forge:armor/dragonsteel_leggings', 'iceandfire:dragonsteel_fire_leggings')
    event.add('forge:armor/dragonsteel_boots', 'iceandfire:dragonsteel_fire_boots')

    event.add('forge:armor/dragonsteel_helmet', 'iceandfire:dragonsteel_ice_helmet')
    event.add('forge:armor/dragonsteel_chestplate', 'iceandfire:dragonsteel_ice_chestplate')
    event.add('forge:armor/dragonsteel_leggings', 'iceandfire:dragonsteel_ice_leggings')
    event.add('forge:armor/dragonsteel_boots', 'iceandfire:dragonsteel_ice_boots')

    event.add('forge:armor/dragonsteel_helmet', 'iceandfire:dragonsteel_lightning_helmet')
    event.add('forge:armor/dragonsteel_chestplate', 'iceandfire:dragonsteel_lightning_chestplate')
    event.add('forge:armor/dragonsteel_leggings', 'iceandfire:dragonsteel_lightning_leggings')
    event.add('forge:armor/dragonsteel_boots', 'iceandfire:dragonsteel_lightning_boots')
  })

ServerEvents.recipes(event => {
    //Warden Armor
    event.remove({ output: 'deeperdarker:warden_helmet' })
    event.remove({ output: 'deeperdarker:warden_chestplate' })
    event.remove({ output: 'deeperdarker:warden_leggings' })
    event.remove({ output: 'deeperdarker:warden_boots' })

    event.smithing(
        'deeperdarker:warden_helmet',                    // arg 1: output
        'deeperdarker:warden_upgrade_smithing_template', // arg 2: the smithing template
        '#forge:armor/dragon_scale_helmet',              // arg 3: the item to be upgraded
        'deeperdarker:reinforced_echo_shard'             // arg 4: the upgrade item
    )

    event.smithing(
        'deeperdarker:warden_chestplate',                    
        'deeperdarker:warden_upgrade_smithing_template', 
        '#forge:armor/dragon_scale_chestplate',          
        'deeperdarker:reinforced_echo_shard'             
    )

    event.smithing(
        'deeperdarker:warden_leggings',                    
        'deeperdarker:warden_upgrade_smithing_template', 
        '#forge:armor/dragon_scale_leggings',            
        'deeperdarker:reinforced_echo_shard'             
    )

    event.smithing(
        'deeperdarker:warden_boots',                    
        'deeperdarker:warden_upgrade_smithing_template', 
        '#forge:armor/dragon_scale_boots',               
        'deeperdarker:reinforced_echo_shard'             
    )

    //Monstrous Helmet
    event.remove({ output: 'cataclysm:monstrous_helm' })

    event.smithing(
        'cataclysm:monstrous_helm',                    
        'deeperdarker:warden_upgrade_smithing_template', 
        'deeperdarker:warden_helmet',               
        'deeperdarker:reinforced_echo_shard'             
    )

    //Cursium Armor
    event.remove({ output: 'cataclysm:cursium_helmet' })
    event.remove({ output: 'cataclysm:cursium_chestplate' })
    event.remove({ output: 'cataclysm:cursium_leggings' })
    event.remove({ output: 'cataclysm:cursium_boots' })

    event.smithing(
        'cataclysm:cursium_helmet',                    
        'cataclysm:cursium_upgrade_smithing_template', 
        'cataclysm:monstrous_helm',               
        'cataclysm:cursium_ingot'             
    )

    event.smithing(
        'cataclysm:cursium_chestplate',                    
        'cataclysm:cursium_upgrade_smithing_template', 
        'deeperdarker:warden_chestplate',               
        'cataclysm:cursium_ingot'             
    )

    event.smithing(
        'cataclysm:cursium_leggings',                    
        'cataclysm:cursium_upgrade_smithing_template', 
        'deeperdarker:warden_leggings',               
        'cataclysm:cursium_ingot'             
    )

    event.smithing(
        'cataclysm:cursium_boots',                    
        'cataclysm:cursium_upgrade_smithing_template', 
        'deeperdarker:warden_boots',               
        'cataclysm:cursium_ingot'             
    )

    //Reptile Armor
    event.remove({ output: 'cataclysm:bone_reptile_helmet' })
    event.remove({ output: 'cataclysm:bone_reptile_chestplate' })

    event.shaped('cataclysm:bone_reptile_helmet', [
        '   ',
        'ABA',
        'CDC'
    ], 
    {
        A: 'cataclysm:ancient_metal_ingot',
        B: 'cataclysm:cursium_helmet',
        C: 'cataclysm:koboleton_bone',
        D: 'cataclysm:kobolediator_skull'
    })

    event.shaped('cataclysm:bone_reptile_chestplate', [
        'A A',
        'CBC',
        'ACA'
    ], 
    {
        A: 'cataclysm:ancient_metal_ingot',
        B: 'cataclysm:cursium_chestplate',
        C: 'cataclysm:koboleton_bone'
    })

    //Refined Obsidian Armor
    event.remove({ output: 'mekanismtools:refined_obsidian_helmet' })
    event.remove({ output: 'mekanismtools:refined_obsidian_chestplate' })
    event.remove({ output: 'mekanismtools:refined_obsidian_leggings' })
    event.remove({ output: 'mekanismtools:refined_obsidian_boots' })

    event.shaped('mekanismtools:refined_obsidian_helmet', [
        '   ',
        'AAA',
        'ABA'
    ], 
    {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'cataclysm:bone_reptile_helmet'
    })

    event.shaped('mekanismtools:refined_obsidian_chestplate', [
        'A A',
        'ABA',
        'AAA'
    ], 
    {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'cataclysm:bone_reptile_chestplate'
    })

    event.shaped('mekanismtools:refined_obsidian_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], 
    {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'cataclysm:cursium_leggings'
    })

    event.shaped('mekanismtools:refined_obsidian_boots', [
        '   ',
        'A A',
        'ABA'
    ], 
    {
        A: 'mekanism:ingot_refined_obsidian',
        B: 'cataclysm:cursium_boots'
    })

    //Dragonsteel Armor
    event.remove({ output: '#forge:armor/dragonsteel_helmet' })
    event.remove({ output: '#forge:armor/dragonsteel_chestplate' })
    event.remove({ output: '#forge:armor/dragonsteel_leggings' })
    event.remove({ output: '#forge:armor/dragonsteel_boots' })

    event.shaped('iceandfire:dragonsteel_fire_helmet', [
        '   ',
        'AAA',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_fire_ingot',
        B: 'mekanismtools:refined_obsidian_helmet'
    })

    event.shaped('iceandfire:dragonsteel_fire_chestplate', [
        'A A',
        'ABA',
        'AAA'
    ], 
    {
        A: 'iceandfire:dragonsteel_fire_ingot',
        B: 'mekanismtools:refined_obsidian_chestplate'
    })

    event.shaped('iceandfire:dragonsteel_fire_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], 
    {
        A: 'iceandfire:dragonsteel_fire_ingot',
        B: 'mekanismtools:refined_obsidian_leggings'
    })

    event.shaped('iceandfire:dragonsteel_fire_boots', [
        '   ',
        'A A',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_fire_ingot',
        B: 'mekanismtools:refined_obsidian_boots'
    })

    event.shaped('iceandfire:dragonsteel_ice_helmet', [
        '   ',
        'AAA',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_ice_ingot',
        B: 'mekanismtools:refined_obsidian_helmet'
    })

    event.shaped('iceandfire:dragonsteel_ice_chestplate', [
        'A A',
        'ABA',
        'AAA'
    ], 
    {
        A: 'iceandfire:dragonsteel_ice_ingot',
        B: 'mekanismtools:refined_obsidian_chestplate'
    })

    event.shaped('iceandfire:dragonsteel_ice_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], 
    {
        A: 'iceandfire:dragonsteel_ice_ingot',
        B: 'mekanismtools:refined_obsidian_leggings'
    })

    event.shaped('iceandfire:dragonsteel_ice_boots', [
        '   ',
        'A A',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_ice_ingot',
        B: 'mekanismtools:refined_obsidian_boots'
    })

    event.shaped('iceandfire:dragonsteel_lightning_helmet', [
        '   ',
        'AAA',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_lightning_ingot',
        B: 'mekanismtools:refined_obsidian_helmet'
    })

    event.shaped('iceandfire:dragonsteel_lightning_chestplate', [
        'A A',
        'ABA',
        'AAA'
    ], 
    {
        A: 'iceandfire:dragonsteel_lightning_ingot',
        B: 'mekanismtools:refined_obsidian_chestplate'
    })

    event.shaped('iceandfire:dragonsteel_lightning_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], 
    {
        A: 'iceandfire:dragonsteel_lightning_ingot',
        B: 'mekanismtools:refined_obsidian_leggings'
    })

    event.shaped('iceandfire:dragonsteel_lightning_boots', [
        '   ',
        'A A',
        'ABA'
    ], 
    {
        A: 'iceandfire:dragonsteel_lightning_ingot',
        B: 'mekanismtools:refined_obsidian_boots'
    })

    //Ignitium Chestplate
    event.remove({ output: 'cataclysm:ignitium_chestplate' })

    event.smithing(
        'cataclysm:ignitium_chestplate',                    
        'cataclysm:ignitium_upgrade_smithing_template', 
        '#forge:armor/dragonsteel_chestplate',               
        'cataclysm:ignitium_ingot'             
    )

    //MekaSuit
    event.remove({ output: 'mekanism:mekasuit_helmet' })
    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
    event.remove({ output: 'mekanism:mekasuit_pants' })
    event.remove({ output: 'mekanism:mekasuit_boots' })

    event.shaped('mekanism:mekasuit_helmet', [
        'ADA',
        'AEA',
        'BCB'
    ], 
    {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:basic_induction_cell',
        D: 'mekanism:ultimate_control_circuit',
        E: '#forge:armor/dragonsteel_helmet'
    })

    event.shaped('mekanism:mekasuit_bodyarmor', [
        'ADA',
        'AEA',
        'BCB'
    ], 
    {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:basic_induction_cell',
        D: 'mekanism:ultimate_control_circuit',
        E: '#forge:armor/dragonsteel_chestplate'
    })

    event.shaped('mekanism:mekasuit_pants', [
        'ADA',
        'AEA',
        'BCB'
    ], 
    {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:basic_induction_cell',
        D: 'mekanism:ultimate_control_circuit',
        E: '#forge:armor/dragonsteel_leggings'
    })

    event.shaped('mekanism:mekasuit_boots', [
        'ADA',
        'AEA',
        'BCB'
    ], 
    {
        A: 'mekanism:hdpe_sheet',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:basic_induction_cell',
        D: 'mekanism:ultimate_control_circuit',
        E: '#forge:armor/dragonsteel_boots'
    })
})