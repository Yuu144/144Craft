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
        '   ',
        ' A ',
        '   '
      ],
      {
        A: 'tiab:time_in_a_bottle',
      }
    )

    //Neutron star shard
    hscraft.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'occultism:stable_wormhole', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'apotheosis:sigil_of_withdrawal', 'count': 1 }
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