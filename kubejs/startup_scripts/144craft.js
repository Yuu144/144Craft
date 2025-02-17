StartupEvents.registry('item', event => {
  event.create('pure_element_144_ium')
  event.create('-null-')
  event.create('orb_of_eternity')
  event.create('void_crystal')
  event.create('neutron_star_shard')
  event.create('time_manipulator')
  event.create('ethereal_capacitor')
})

ItemEvents.modification(event => {
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
})

StartupEvents.modifyCreativeTab('ores144craft:ores144craft_tab', event => {
	event.addAfter('', 'kubejs:pure_element_144_ium')
  event.addAfter('', 'kubejs:-null-')
  event.addAfter('', 'kubejs:orb_of_eternity')
  event.addAfter('', 'kubejs:void_crystal')
  event.addAfter('', 'kubejs:neutron_star_shard')
  event.addAfter('', 'kubejs:time_manipulator')
  event.addAfter('', 'kubejs:ethereal_capacitor')
})