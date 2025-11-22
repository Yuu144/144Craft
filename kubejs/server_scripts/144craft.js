ServerEvents.recipes(hscraft => {
    //-null-
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        '   AAA   ',
        ' AAABAAA ',
        ' ACDEDFA ',
        'GGH123HGG',
        'GIJ4K5JIG',
        'GGH678HGG',
        ' AODLDMA ',
        ' AAANAAA ',
        '   AAA   '
        ],
        key: {
          A: Ingredient.of('kubejs:pure_element_144_ium_block').toJson(),
          B: Ingredient.of('allthecompressed:osmium_block_8x').toJson(),
          C: Ingredient.of('#forge:eggs/dragon_egg').toJson(),
          D: Ingredient.of('bigreactors:insanite_block').toJson(),
          E: Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:144000,FluidName:"industrialforegoing:ether_gas"}}]}}').strongNBT().toJson(),
          F: Ingredient.of('ad_astra:cheese_block').toJson(),
          G: Ingredient.of('kubejs:energized_pure_element_144_ium_block').toJson(),
          H: Ingredient.of('draconicevolution:large_chaos_frag').toJson(),
          1: Ingredient.of('kubejs:orb_of_eternity').toJson(),
          2: Ingredient.of('kubejs:void_crystal').toJson(),
          3: Ingredient.of('kubejs:neutron_star_shard').toJson(),
          I: Ingredient.of('cataclysm:ignitium_ingot').toJson(),
          J: Ingredient.of('mysticalagradditions:creative_essence').toJson(),
          4: Ingredient.of('kubejs:quasar').toJson(),
          K: Ingredient.of('draconicevolution:reactor_core').toJson(),
          5: Ingredient.of('kubejs:time_manipulator').toJson(),
          6: Ingredient.of('kubejs:dark_matter').toJson(),
          7: Ingredient.of('kubejs:sick_twig').toJson(),
          8: Ingredient.of('kubejs:ethereal_capacitor').toJson(),
          L: Item.of('mekanism:ultimate_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:144000,FluidName:"industrialforegoing:essence"}}]}}').strongNBT().toJson(),
          M: Ingredient.of('apotheosis:ender_library').toJson(),
          N: Ingredient.of('allthecompressed:nether_star_block_8x').toJson(),
          O: Ingredient.of('twilightforest:snow_queen_trophy').toJson()
      },
      result: Ingredient.of('kubejs:-null-').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/-null-2')

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
    hscraft.shaped(
      Item.of('kubejs:orb_of_eternity', 1),
      [
        'ABA',
        'CDC',
        'AEA'
      ],
      {
        A: 'industrialforegoing:machine_frame_supreme',
        B: 'advanced_ae:quantum_core',
        C: 'kubejs:energized_pure_element_144_ium',
        D: 'forbidden_arcanus:eternal_stella',
        E: '#forge:eggs/dragon_egg'
      }
    )

    //Dark matter
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        ' BGB ',
        'FBABE',
        ' BDB '
        ],
        key: {
          A: Item.of('kubejs:energized_pure_element_144_ium').toJson(),
          B: Item.of('mekanism:pellet_antimatter').toJson(),
          D: Item.of('cataclysm:cursium_block').toJson(),
          E: Item.of('draconicevolution:large_chaos_frag').toJson(),
          F: Item.of('draconicevolution:large_chaos_frag').toJson(),
          G: Item.of('cataclysm:ignitium_ingot').toJson()
      },
      result: Item.of('kubejs:dark_matter').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/dark_matter')

    //Void crystal
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
        ' AAA ',
        'AABAA',
        'ACDEA',
        'AAFAA',
        ' AAA '
        ],
        key: {
          A: Ingredient.of('allthecompressed:nitro_crystal_block_6x').toJson(),
          B: Ingredient.of('enderio:weather_crystal').toJson(),
          C: Ingredient.of('dungeonnowloading:chaotic_hexahedron').toJson(),
          D: Ingredient.of('industrialforegoing:laser_lens10').toJson(),
          E: Ingredient.of('bhc:soul_heart_crystal').toJson(),
          F: Ingredient.of('mysticalagradditions:insanium_essence').toJson()
      },
      result: Ingredient.of('kubejs:void_crystal').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/void_crystal')

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
        E: 'cataclysm:witherite_ingot',
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
        'E E'
      ],
      {
        A: 'kubejs:energized_pure_element_144_ium_block',
        C: 'enderio:octadic_capacitor',
        D: 'draconicevolution:chaotic_capacitor',
        E: 'bigreactors:inanite_ingot'
      }
    )
    
    //Neutron star shard
    hscraft.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:osmium_block_9x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:uraninite_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:signalum_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:nether_star_block_9x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'occultism:stable_wormhole', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:netherite_block_7x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'ars_nouveau:source_gem_block', 'count': 64 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'draconicevolution:awakened_draconium_block', 'count': 13 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'kubejs:energized_pure_element_144_ium_block', 'count': 1 }
      ],
      pressure: 5.0,
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
        Ingredient.of('kubejs:pure_element_144_ium_block').toJson(),
        Ingredient.of('cataclysm:ignitium_ingot').toJson()
      ],
      energy: '1000000000000',
    result: Item.of('kubejs:sick_twig').toJson()
    }).id('144craft:energizing/sick_twig')
    //--------------------------------------------------------------------------

    // Element 13 shard
    hscraft.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 10,
      "tag": "forge:heavy_water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:hydrogen"
    },
    "itemInput": {
       "amount": 1,
       "ingredient": {
         "item": "ores144craft:element_13_ore"
       }
     },
     "itemOutput": {
       "count": 2,
       "item": "ores144craft:element_13_ium"
    },
     "gasOutput": {
       "amount": 100,
       "gas": "mekanism:ethene"
     }
  }).id('144craft:reaction/13_ore/heavywater_hydrogen')

    //144ium
    hscraft.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 100,
      "fluid": "industrialforegoing:ether_gas"
    },
    "gasInput": {
      "amount": 200,
      "gas": "mekanism:uranium_hexafluoride"
    },
    "itemInput": {
       "amount": 1,
       "ingredient": {
         "item": "ores144craft:element_144_ore"
       }
     },
     "itemOutput": {
       "count": 3,
       "item": "ores144craft:element_144_ium"
    },
     "gasOutput": {
       "amount": 200,
       "gas": "mekanism:spent_nuclear_waste"
     }
  }).id('144craft:reaction/14_ore/uranhexa_ethergas')

    //13 Armor Set
    hscraft.remove({ output: 'allthewizardgear:allthemodium_mage_helmet' })
    hscraft.remove({ output: 'allthewizardgear:allthemodium_mage_chestplate' })
    hscraft.remove({ output: 'allthewizardgear:allthemodium_mage_leggings' })
    hscraft.remove({ output: 'allthewizardgear:allthemodium_mage_boots' })

    hscraft.smithing(
        'allthewizardgear:allthemodium_mage_helmet',                    
        'kubejs:13_ium_rune', 
        'deeperdarker:warden_helmet',               
        'irons_spellbooks:magic_cloth'
    )

    hscraft.smithing(
        'allthewizardgear:allthemodium_mage_chestplate',                    
        'kubejs:13_ium_rune', 
        'deeperdarker:warden_chestplate',               
        'irons_spellbooks:magic_cloth'             
    )

    hscraft.smithing(
        'allthewizardgear:allthemodium_mage_leggings',                    
        'kubejs:13_ium_rune', 
        'deeperdarker:warden_leggings',               
        'irons_spellbooks:magic_cloth'             
    )

    hscraft.smithing(
        'allthewizardgear:allthemodium_mage_boots',                    
        'kubejs:13_ium_rune', 
        'deeperdarker:warden_boots',               
        'irons_spellbooks:magic_cloth'             
    )

    //144 Armor set
    hscraft.remove({ output: 'allthewizardgear:unobtainium_mage_helmet' })
    hscraft.remove({ output: 'allthewizardgear:unobtainium_mage_chestplate' })
    hscraft.remove({ output: 'allthewizardgear:unobtainium_mage_leggings' })
    hscraft.remove({ output: 'allthewizardgear:unobtainium_mage_boots' })

    hscraft.smithing(
        'allthewizardgear:unobtainium_mage_helmet',                    
        'kubejs:144_smith_template', 
        'allthewizardgear:allthemodium_mage_helmet',               
        'kubejs:element_144_ium_block'             
    )

    hscraft.smithing(
        'allthewizardgear:unobtainium_mage_chestplate',                    
        'kubejs:144_smith_template', 
        'allthewizardgear:allthemodium_mage_chestplate',               
        'kubejs:element_144_ium_block'             
    )

    hscraft.smithing(
        'allthewizardgear:unobtainium_mage_leggings',                    
        'kubejs:144_smith_template', 
        'allthewizardgear:allthemodium_mage_leggings',               
        'kubejs:element_144_ium_block'             
    )

    hscraft.smithing(
        'allthewizardgear:unobtainium_mage_boots',                    
        'kubejs:144_smith_template', 
        'allthewizardgear:allthemodium_mage_boots',               
        'kubejs:element_144_ium_block'             
    )

    hscraft.remove({ output: 'allthewizardgear:vibranium_mage_helmet' })
    hscraft.remove({ output: 'allthewizardgear:vibranium_mage_chestplate' })
    hscraft.remove({ output: 'allthewizardgear:vibranium_mage_leggings' })
    hscraft.remove({ output: 'allthewizardgear:vibranium_mage_boots' })

    //13 Rune
    hscraft.shaped(
      Item.of('kubejs:13_ium_rune', 1),
      [
        'BBB',
        'BAB',
        'BBB'
      ],{
        A: 'irons_spellbooks:blank_rune',
        B: 'ores144craft:element_13_ium'
      }
    )

    //144 Smith Template
    hscraft.shaped(
      Item.of('kubejs:144_smith_template', 2),
      [
        'BAB',
        'BCB',
        'BBB'
      ],{
        A: 'kubejs:144_smith_template',
        B: 'ores144craft:element_144_ium',
        C: 'ores144craft:element_13_ium'
      }
    )

    //Croissant (Quasar)

    hscraft.custom(
      {
        type: "create:sequenced_assembly",
        ingredient: {
          item: "ae2:singularity"
        },
        transitionalItem: {
          item: "ae2:singularity"
        },
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {
                item: "ae2:singularity"
              },
              {
                item: "cataclysm:ancient_metal_block"
              }
            ],
            results: [
              {
                item: "ae2:singularity"
              }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "ae2:singularity"
              }
            ],
            results: [
              {
                item: "ae2:singularity"
              }
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {
                item: "ae2:singularity"
              },
              {
                item: "allthecompressed:nitro_crystal_block_8x"
              }
            ],
            results: [
              {
                item: "ae2:singularity"
              }
            ],
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "ae2:singularity"
              }
            ],
            results: [
              {
                item: "ae2:singularity"
              }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "ae2:singularity"
              }
            ],
            results: [
              {
                item: "ae2:singularity"
              }
            ]
          }
        ],
        results: [
          {
            item: "kubejs:quasar",
            chance: 90.0
          },
          {
            item: "supplementaries:ash",
            chance: 10.0
          }
        ],
        loops: 3
      }
    )
})

ServerEvents.tags('item', event => {
  event.add('forge:elements/144-ium', 'ores144craft:element_144_ium')
  event.add('forge:elements/13-ium', 'ores144craft:element_13_ium')
  event.add('forge:elements/144-ore', 'ores144craft:element_144_ore')
  event.add('forge:elements/13-ore', 'ores144craft:element_13_ore')
})
ServerEvents.tags('block', event => {
  event.add('mekanism:miner_blacklist', 'ores144craft:element_144_ore')
  event.add('minecraft:features_cannot_replace', 'ores144craft:element_144_ore')
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
  event.setMessage(event.message.replace('Radiance', '§6Radiance'))
})

ServerEvents.tick(event => {
  const { server } = event 
  if (server.tickCount % 2) return
  let players = event.server.players;

  for (let player of players) {
    let inventory = player.inventory
    let main = player.mainHandItem
    for (let item of inventory.items){
      if (item.id == 'kubejs:quasar') {
        player.potionEffects.add('kubejs:gravitational_pressure', 100, 1, false, false),
        player.potionEffects.add('minecraft:wither', 100, 0, false, false)
        player.potionEffects.add('minecraft:slowness', 100, 4, false, false)
      }

      if (item.id == 'kubejs:dark_matter') {
        player.potionEffects.add('kubejs:gravitational_pressure', 100, 1, false, false)
      }

      if (item.id == 'kubejs:neutron_star_shard') {
        player.potionEffects.add('kubejs:gravitational_pressure', 100, 1, false, false)
      }
    }
    
    if (main.id == 'kubejs:sick_twig') {
      player.potionEffects.add('minecraft:strength', 100, 0, false, false)
    }
  }
})