ItemEvents.modification(event => {
  event.modify('silentgear:tyrian_steel_ingot', item => {
    item.rarity = 'EPIC'
  })

  event.modify('silentgear:azure_electrum_ingot', item => {
    item.rarity = 'EPIC'
  })

  event.modify('silentgear:crimson_steel_ingot', item => {
    item.rarity = 'RARE'
  })
})