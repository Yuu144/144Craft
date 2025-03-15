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
})