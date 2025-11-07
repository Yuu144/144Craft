ItemEvents.modification(event => {
  event.modify('cataclysm:ignitium_helmet', item => {
    item.armorProtection = 9
    item.armorToughness = 7
    item.armorKnockbackResistance = 0.2
  })

  event.modify('cataclysm:ignitium_chestplate', item => {
    item.armorProtection = 14
    item.armorToughness = 7
    item.armorKnockbackResistance = 0.2
  })

  event.modify('cataclysm:ignitium_elytra_chestplate', item => {
    item.armorProtection = 14
    item.armorToughness = 7
    item.armorKnockbackResistance = 0.1
  })

  event.modify('cataclysm:ignitium_leggings', item => {
    item.armorProtection = 12
    item.armorToughness = 7
    item.armorKnockbackResistance = 0.2
  })

  event.modify('cataclysm:ignitium_boots', item => {
    item.armorProtection = 9
    item.armorToughness = 7
    item.armorKnockbackResistance = 0.2
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
})