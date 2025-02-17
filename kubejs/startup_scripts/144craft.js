StartupEvents.registry('item', event => {
  event.create('pure_element_144_ium')
  event.create('-null-')
  event.create('orb_of_eternity')
  event.create('void_crystal')
  event.create('neutron_star_shard')
  event.create('time_manipulator')
  event.create('ethereal_capacitor')
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