const items = [
  { item: 'silentgear:tyrian_steel_ingot', rarity: 'EPIC' },
  { item: 'silentgear:azure_electrum_ingot', rarity: 'EPIC' },
  { item: 'silentgear:crimson_steel_ingot', rarity: 'RARE' },
  { item: 'bhc:red_heart', rarity: 'RARE' },
  { item: 'bhc:yellow_heart', rarity: 'EPIC' },
  { item: 'bhc:green_heart', rarity: 'EPIC' },
  { item: 'bhc:blue_heart', rarity: 'EPIC' },
  { item: 'ores144craft:element_144_ium', rarity: 'EPIC' },
  { item: 'ores144craft:element_13_ium', rarity: 'RARE' },
  { item: 'ores144craft:element_144_ore', rarity: 'EPIC' },
  { item: 'ores144craft:element_13_ore', rarity: 'RARE' },
  { item: 'minecraft:diamond', rarity: 'RARE' },
  { item: 'minecraft:netherite_ingot', rarity: 'EPIC' },
  { item: 'spartanweaponry:diamond_dagger', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_parrying_dagger', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_longsword', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_katana', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_saber', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_rapier', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_greatsword', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_battle_hammer', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_warhammer', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_spear', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_halberd', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_pike', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_lance', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_longbow', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_heavy_crossbow', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_throwing_knife', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_tomahawk', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_javelin', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_boomerang', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_battleaxe', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_flanged_mace', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_glaive', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_quarterstaff', rarity: 'RARE' },
  { item: 'spartanweaponry:diamond_scythe', rarity: 'RARE' },
  { item: 'spartanweaponry:netherite_dagger', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_parrying_dagger', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_longsword', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_katana', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_saber', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_rapier', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_greatsword', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_battle_hammer', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_warhammer', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_spear', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_halberd', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_pike', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_lance', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_longbow', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_heavy_crossbow', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_throwing_knife', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_tomahawk', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_javelin', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_boomerang', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_battleaxe', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_flanged_mace', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_glaive', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_quarterstaff', rarity: 'EPIC' },
  { item: 'spartanweaponry:netherite_scythe', rarity: 'EPIC' }
]

const tags = [
  { tag: '#spartanweaponry:diamond_weapons', rarity: 'RARE' },
  { tag: '#spartanweaponry:netherite_weapons', rarity: 'EPIC' }
]

ItemEvents.modification(event => {
  console.log("Loading item rarities...")
  
  items.forEach(obj => {
    event.modify(obj.item, item => {
      item.rarity = obj.rarity
    })
  })

console.log("Loading item rarities tags...")

  tags.forEach(obj => {
    let tagItems = Ingredient.of(obj.tag).itemIds

    tagItems.forEach(item => {
      console.log(item)
      event.modify(item, modify => {
        modify.rarity = obj.rarity
      })
    })
  })
})