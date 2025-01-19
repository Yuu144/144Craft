StartupEvents.registry('block', event => {
    event.create('element_144_ore')
    .displayName('Element-144 Ore')
    .soundType('stone')
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_netherite_tool')
    .lightLevel(3)
  })

StartupEvents.registry('item', event => {
  event.create('element_144-ium')
  event.create('pure_element_144-ium')
  event.create('-null-')
  event.create('core')
  event.create('improbable_relativity_distorter')
})