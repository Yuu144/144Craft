ServerEvents.recipes(hscraft => {
    //-null- Crafting
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
      '    O    ',
      '   FEF   ',
      '   EBE   ',
      ' FEADAEF ',
      'OEBDCDBEO',
      ' FEADAEF ',
      '   EBE   ',
      '   FEF   ',
      '    O    '
      ],
      key: {
        O: Ingredient.of('create:cogwheel').toJson(),
        A: Ingredient.of('draconicevolution:chaos_shard').toJson(),
        B: Ingredient.of('draconicevolution:large_chaos_frag').toJson(),
        C: Ingredient.of('kubejs:pure_element_144_ium').toJson(),
        D: Ingredient.of('cataclysm:ignitium_block').toJson(),
        E: Ingredient.of('draconicevolution:awakened_draconium_block').toJson(),
        F: Ingredient.of('mekanism:pellet_antimatter').toJson()
        
      },
      result: Ingredient.of('kubejs:-null-').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/-null-')

    //pure 144ium
    hscraft.custom({
      "type": "mekanism:nucleosynthesizing",
      "itemInput": {
        "amount": 1,
        "ingredient": {
          "item": "ores144craft:element_144_ium"
        }
      },
      "gasInput": {
        "amount": 10,
        "gas": "mekanism:antimatter"
      },
      "output": {
        "count": 1,
        "item": "kubejs:pure_element_144_ium"
      },
      "duration": 5000
    }).id('144craft:nucleosynthesizing/pure_144_ium')

    //Time in a bottle
    hscraft.remove({ output: 'tiab:time_in_a_bottle' })

    hscraft.shaped(
      Item.of('tiab:time_in_a_bottle', 1),
      [
        'AAA',
        'BCB',
        'DED'
      ],
      {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:diamond',
        C: 'ores144craft:element_144_ium',
        D: 'minecraft:lapis_lazuli',
        E: 'minecraft:glass_bottle'
      }
    )

    //Orb of eternity
    hscraft.shaped(
      Item.of('kubejs:orb_of_eternity', 1),
      [
        'ACA',
        'CBC',
        'ACA'
      ],
      {
        A: 'forbidden_arcanus:eternal_stella',
        B: 'tiab:time_in_a_bottle',
        C: 'ad_astra:calorite_ingot'
      }
    )

    //Void crystal
    hscraft.shaped(
      Item.of('kubejs:void_crystal', 1),
      [
        'ABA',
        'DCE',
        'AFA'
      ],
      {
        A: 'cataclysm:void_eye',
        B: 'minecraft:dragon_egg',
        C: 'cataclysm:void_core',
        D: 'bigreactors:insanite_ingot',
        E: 'mekanismexplosives:explosive_polonium',
        F: 'mekanism:pellet_antimatter'
      }
    )

    //Time Manipulator
    hscraft.shaped(
      Item.of('kubejs:time_manipulator', 1),
      [
        'BCD',
        'EAE',
        'FGH'
      ],
      {
        A: 'tiab:time_in_a_bottle',
        B: 'ars_nouveau:glyph_accelerate',
        C: 'soulsweapons:withered_demon_heart',
        D: 'ars_nouveau:glyph_decelerate',
        E: 'minecraft:echo_shard',
        F: 'ars_nouveau:glyph_duration_down',
        G: Item.of('mahoutsukai:attuned_diamond', '{MAHOUTSUKAI_GEM_STORED_MANA:10000}'),
        H: 'ars_nouveau:glyph_extend_time'
      }
    )

    //Ethereal Capacitor
    hscraft.shaped(
      Item.of('kubejs:ethereal_capacitor', 1),
      [
        'ECE',
        'DAD',
        'EBE'
      ],
      {
        A: 'enderio:sentient_ender',
        B: 'enderio:frank_n_zombie',
        C: 'enderio:octadic_capacitor',
        D: 'draconicevolution:chaotic_capacitor',
        E: 'bigreactors:inanite_ingot'
      }
    )

    //Neutron star shard
    hscraft.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:steel_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:enderium_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:signalum_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:nether_star_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'occultism:stable_wormhole', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:cobblestone_8x', 'count': 1 }
      ],
      pressure: 4.9,
      results: [
        {
          'item': 'kubejs:neutron_star_shard'
        }
      ]
    }).id('144craft:pressure/kubejs/neutron_star_shard')
})

ServerEvents.tags('item', event => {
  event.add('forge:elements/144-ium', 'ores144craft:element_144_ium')
})