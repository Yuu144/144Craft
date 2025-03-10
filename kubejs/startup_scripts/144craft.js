StartupEvents.registry('item', event => {
  event.create('pure_element_144_ium').displayName('Pure Element 144-ium')
  //event.create('element_144_ium_block').displayName('Element 144-ium Block')
  //event.create('pure_element_144_ium_block').displayName('Pure Element 144-ium Block')
  event.create('energized_pure_element_144_ium').displayName('Energized Pure Element 144-ium')
  //event.create('energized_pure_element_144_ium_block').displayName('Energized Pure Element 144-ium Block')
  event.create('-null-')
  event.create('orb_of_eternity')
  event.create('void_crystal')
  event.create('neutron_star_shard')
  event.create('time_manipulator')
  event.create('ethereal_capacitor')
  event.create('dark_matter')
  event.create('quasar')
  event.create('sick_twig')
  event.create('stick_x1').displayName('Stick x1')
  event.create('stick_x2').displayName('Stick x2')
  event.create('stick_x3').displayName('Stick x3')
  event.create('stick_x4').displayName('Stick x4')
  event.create('stick_x5').displayName('Stick x5')
  event.create('stick_x6').displayName('Stick x6')
  event.create('stick_x7').displayName('Stick x7')
  event.create('stick_x8').displayName('Stick x8')
  event.create('stick_x9').displayName('Stick x9')
})

StartupEvents.registry('block', event => {
  //Pure 144 Block
  event.create('pure_element_144_ium_block')
  .displayName('Pure Element 144-ium Block')
  .material('stone')
  .hardness(4.5)
  .resistance(1.5)
  .requiresTool(true)
    .tagBlock('mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')

  //144 Block
  event.create('element_144_ium_block')
  .displayName('Element 144-ium Block')
  .material('stone')
  .hardness(4.5)
  .resistance(1.5)
  .requiresTool(true)
    .tagBlock('mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')

  //Energized Pure 144 Block
  event.create('energized_pure_element_144_ium_block')
  .displayName('Energized Pure Element 144-ium Block')
  .material('stone')
  .hardness(4.5)
  .resistance(1.5)
  .requiresTool(true)
    .tagBlock('mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
})

ItemEvents.modification(event => {
  event.modify('ores144craft:element_144_ium', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:pure_element_144_ium', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:-null-', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:orb_of_eternity', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:void_crystal', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:neutron_star_shard', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:time_manipulator', item => {
    item.rarity = 'EPIC'
  })
  
  event.modify('kubejs:ethereal_capacitor', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:sick_twig', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:quasar', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:dark_matter', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:element_144_ium_block', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:pure_element_144_ium_block', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:energized_pure_element_144_ium', item => {
    item.rarity = 'EPIC'
  })

  event.modify('kubejs:energized_pure_element_144_ium_block', item => {
    item.rarity = 'EPIC'
  })
})

StartupEvents.modifyCreativeTab('ores144craft:ores144craft_tab', event => {
	event.addAfter('', 'kubejs:pure_element_144_ium')
  event.addAfter('', 'kubejs:pure_element_144_ium_block')
  event.addAfter('', 'kubejs:energized_pure_element_144_ium')
  event.addAfter('', 'kubejs:energized_pure_element_144_ium_block')
  event.addAfter('', 'kubejs:element_144_ium_block')
  event.addAfter('', 'kubejs:-null-')
  event.addAfter('', 'kubejs:orb_of_eternity')
  event.addAfter('', 'kubejs:void_crystal')
  event.addAfter('', 'kubejs:neutron_star_shard')
  event.addAfter('', 'kubejs:time_manipulator')
  event.addAfter('', 'kubejs:ethereal_capacitor')
  event.addAfter('', 'kubejs:sick_twig')
  event.addAfter('', 'kubejs:dark_matter')
  event.addAfter('', 'kubejs:quasar')
  event.addAfter('', 'kubejs:stick_x1')
  event.addAfter('', 'kubejs:stick_x2')
  event.addAfter('', 'kubejs:stick_x3')
  event.addAfter('', 'kubejs:stick_x4')
  event.addAfter('', 'kubejs:stick_x5')
  event.addAfter('', 'kubejs:stick_x6')
  event.addAfter('', 'kubejs:stick_x7')
  event.addAfter('', 'kubejs:stick_x8')
  event.addAfter('', 'kubejs:stick_x9')
})