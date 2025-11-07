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

  event.modify('bhc:red_heart', item => {
    item.rarity = 'RARE'
  })

  event.modify('bhc:yellow_heart', item => {
    item.rarity = 'EPIC'
  })

  event.modify('bhc:green_heart', item => {
    item.rarity = 'EPIC'
  })

  event.modify('bhc:blue_heart', item => {
    item.rarity = 'EPIC'
  })
})