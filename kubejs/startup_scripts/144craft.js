StartupEvents.registry('block', event => {
    event.create('element_144_ore')
    .displayName('Element-144 Ore')
    .soundType('stone')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('Elysium')
    .requiresTool(true)
    .tagBlock('my_namespace:my_other_tag')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_netherite_tool')
    .lightLevel(4)
  })

StartupEvents.registry('item', event => {
  event.create('element_144-ium')
  event.create('pure_element_144-ium')
})