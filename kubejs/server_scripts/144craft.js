ServerEvents.recipes(hscraft => {
    //-null-
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        '    M    ',
        '   MQM   ',
        '   EJE   ',
        ' MKABCKM ',
        'MOJDNFJLM',
        ' MKGHIKM ',
        '   EJE   ',
        '   MPM   ',
        '    M    '
        ],
        key: {
          A: Ingredient.of('kubejs:orb_of_eternity').toJson(),
          B: Ingredient.of('kubejs:void_crystal').toJson(),
          C: Ingredient.of('kubejs:dark_matter').toJson(),
          D: Ingredient.of('kubejs:time_manipulator').toJson(),
          E: Ingredient.of('mekanism:pellet_antimatter').toJson(),
          F: Ingredient.of('kubejs:neutron_star_shard').toJson(),
          G: Ingredient.of('kubejs:quasar').toJson(),
          H: Ingredient.of('kubejs:sick_twig').toJson(),
          I: Ingredient.of('kubejs:ethereal_capacitor').toJson(),
          J: Ingredient.of('cataclysm:ignitium_ingot').toJson(),
          K: Ingredient.of('draconicevolution:large_chaos_frag').toJson(),
          L: Ingredient.of('productivebees:upgrade_productivity_4').toJson(),
          M: Ingredient.of('kubejs:energized_pure_element_144_ium_block').toJson(),
          N: Ingredient.of('draconicevolution:reactor_core').toJson(),
          O: Ingredient.of('twilightforest:snow_queen_trophy').toJson(),
          P: Ingredient.of('mysticalagradditions:creative_essence').toJson(),
          Q: Ingredient.of('mysticalagriculture:awakened_supremium_ingot_block').toJson()
      },
      result: Ingredient.of('kubejs:-null-').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/-null-')

    //Pure Element 144-Ium
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

    //Energized Pure Element 144-Ium
    hscraft.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('kubejs:pure_element_144_ium').toJson()
      ],
      energy: '1000000000',
    result: Item.of('kubejs:energized_pure_element_144_ium').toJson()
    }).id('144craft:energizing/energized_pure_element_144_ium')

    //Energized Pure Element 144-Ium Block
    hscraft.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('kubejs:pure_element_144_ium_block').toJson()
      ],
      energy: '9000000000',
    result: Item.of('kubejs:energized_pure_element_144_ium_block').toJson()
    }).id('144craft:energizing/energized_pure_element_144_ium_block')

    //Time in a bottle
    hscraft.remove({ output: 'tiab:time_in_a_bottle' })

  // Creative Essence
    hscraft.shaped(
      Item.of('mysticalagradditions:creative_essence', 1), 
      [
        'CAC', 
        'ABA', 
        'CAC'
      ], 
      {
        A: 'mysticalagradditions:insanium_block',
        C: 'mysticalagradditions:insanium_gemstone_block',
        B: 'mysticalagriculture:master_infusion_crystal'
      }
    )

    //Element 144 Ium Blocks
    hscraft.shaped(
      Item.of('kubejs:element_144_ium_block', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: 'ores144craft:element_144_ium'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:pure_element_144_ium_block', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: 'kubejs:pure_element_144_ium'
      }
    )

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
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        '  HBCBH  ',
        ' FBCACBE ',
        '  GBCBG  '
        ],
        key: {
          A: Ingredient.of('tiab:time_in_a_bottle').toJson(),
          B: Ingredient.of('forbidden_arcanus:eternal_stella').toJson(),
          C: Ingredient.of('draconicevolution:chaotic_core').toJson(),
          E: Ingredient.of('cataclysm:flame_eye').toJson(),
          F: Ingredient.of('cataclysm:abyss_eye').toJson(),
          G: Ingredient.of('cataclysm:witherite_block').toJson(),
          H: Ingredient.of('reliquary:fertile_lily_pad').toJson()
      },
      result: Ingredient.of('kubejs:orb_of_eternity').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/orb_of_eternity')

    //Dark matter
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        ' BBB ',
        'FBABE',
        ' CDC '
        ],
        key: {
          A: Ingredient.of('kubejs:energized_pure_element_144_ium').toJson(),
          B: Ingredient.of('mekanism:pellet_antimatter').toJson(),
          C: Ingredient.of('industrialforegoing:supreme_black_hole_tank').toJson(),
          D: Ingredient.of('mekanism:module_gravitational_modulating_unit').toJson(),
          E: Ingredient.of('create_things_and_misc:vibration_mechanism').toJson(),
          F: Ingredient.of('powah:crystal_nitro').toJson()
      },
      result: Ingredient.of('kubejs:dark_matter').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/dark_matter')

    //Void crystal
    hscraft.shaped(
      Item.of('kubejs:void_crystal', 1),
      [
        'GBH',
        'DCE',
        'AFI'
      ],
      {
        A: 'cataclysm:void_eye',
        B: 'minecraft:dragon_egg',
        C: 'cataclysm:void_core',
        D: 'bigreactors:insanite_block',
        E: 'mekanismexplosives:explosive_polonium',
        F: 'mekanism:pellet_antimatter',
        G: 'cyclic:charm_void',
        H: 'cataclysm:void_forge',
        I: 'alexsmobs:void_worm_eye'
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
        C: 'minecraft:clock',
        D: 'ars_nouveau:glyph_decelerate',
        E: 'minecraft:echo_shard',
        F: 'ars_nouveau:glyph_duration_down',
        G: 'mahoutsukai:attuned_diamond',
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
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:module_gravitational_modulating_unit', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:cell_component_256m', 'count': 1 },
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

    //Sick Twig path ---------------------------------------------------------
    hscraft.shaped(
      Item.of('kubejs:stick_x1', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'minecraft:stick'
      }
    )
    
    hscraft.shaped(
      Item.of('kubejs:stick_x2', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x1'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x3', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x2'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x4', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x3'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x5', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x4'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x6', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x5'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x7', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x6'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x8', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x7'
      }
    )

    hscraft.shaped(
      Item.of('kubejs:stick_x9', 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],{
        A: 'kubejs:stick_x8'
      }
    )

    hscraft.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('kubejs:stick_x9').toJson(),
        Ingredient.of('kubejs:pure_element_144_ium_block').toJson()
      ],
      energy: '1000000000000',
    result: Item.of('kubejs:sick_twig').toJson()
    }).id('144craft:energizing/sick_twig')
    //--------------------------------------------------------------------------
})

ServerEvents.tags('item', event => {
  event.add('forge:elements/144-ium', 'ores144craft:element_144_ium')
})

PlayerEvents.decorateChat(event => {
  event.setMessage(event.message.replace('nigga', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('nigger', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('neger', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('n i g g a', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('n e g e r', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('n i g e r', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('n e g r', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('n i g r', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('niger', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('nigr', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
  event.setMessage(event.message.replace('negr', '§4Ich bin eine unglaublich nervige Person die absolut kein Sinn darin sieht andere zu Respektieren'))
})

ServerEvents.tick(event => {
  let players = event.server.players;

  for (let player of players) {
      let inventory = player.inventory
      for (let item of inventory.items){
        if (item.id == 'kubejs:quasar') {
          player.potionEffects.add('kubejs:gravitational_pressure', 100, 1, false, false),
          player.potionEffects.add('minecraft:wither', 100, 0, false, false)
          player.potionEffects.add('minecraft:slowness', 100, 4, false, false)
        }
      }

      for (let item of inventory.items){
        if (item.id == 'kubejs:dark_matter') {
          player.potionEffects.add('kubejs:gravitational_pressure', 100, 1, false, false)
        }
      }

      for (let item of inventory.items){
        if (item.id == 'kubejs:neutron_star_shard') {
          player.potionEffects.add('kubejs:gravitational_pressure', 100, 19, false, false)
        }
      }
  }
})