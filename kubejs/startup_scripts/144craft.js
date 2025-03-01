StartupEvents.registry('item', event => {
  event.create('pure_element_144_ium').displayName('Pure Element 144-ium')
  event.create('element_144_ium_block').displayName('Element 144-ium Block')
  event.create('pure_element_144_ium_block').displayName('Pure Element 144-ium Block')
  event.create('energized_pure_element_144_ium').displayName('Energized Pure Element 144-ium')
  event.create('energized_pure_element_144_ium_block').displayName('Energized Pure Element 144-ium Block')
  event.create('-null-')
  event.create('orb_of_eternity')
  event.create('void_crystal')
  event.create('neutron_star_shard')
  event.create('time_manipulator')
  event.create('ethereal_capacitor')
  event.create('dark_matter')
  event.create('quasar')
  event.create('sick_twig')
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
})