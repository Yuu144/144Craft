ItemEvents.modification(event => {
  event.modify('cataclysm:ignitium_chestplate', item => {
    item.armorProtection = 14
    item.armorToughness = 6
  })

  event.modify('cataclysm:ignitium_elytra_chestplate', item => {
    item.armorProtection = 14
    item.armorToughness = 6
  })

  event.modify('cataclysm:monstrous_helm', item => {
    item.armorProtection = 4
    item.armorToughness = 4
  })

  event.modify('cataclysm:bone_reptile_helmet', item => {
    item.armorProtection = 6
    item.armorToughness = 4
  })

  event.modify('cataclysm:bone_reptile_chestplate', item => {
    item.armorProtection = 11
    item.armorToughness = 4
  })

  event.modify('cataclysm:infernal_forge', item => {
    item.attackDamage = 14
  })

  event.modify('cataclysm:void_forge', item => {
    item.attackDamage = 15
  })

  event.modify('cataclysm:meat_shredder', item => {
    item.attackDamage = 11
  })

  event.modify('cataclysm:soul_render', item => {
    item.attackDamage = 18.5
  })

  event.modify('cataclysm:ancient_spear', item => {
    item.attackDamage = 16
  })

  event.modify('cataclysm:astrape', item => {
    item.attackDamage = 18
  })

  event.modify('cataclysm:ceraunus', item => {
    item.attackDamage = 24
  })

  event.modify('cataclysm:the_incinerator', item => {
    item.attackDamage = 21
  })
})