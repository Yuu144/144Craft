let cropAdjust = [
  {crop:"steel", tier:"imperium"},
  {crop:"bronze", tier:"tertium"},
  {crop:"brass", tier:"tertium", block:"alltheores:brass_block"},
  {crop:"nitro_crystal", tier:"insanium"},
  {crop:"spirited_crystal", tier:"supremium"},
  {crop:"niotic_crystal", tier:"supremium"},
  {crop:"blazing_crystal", tier:"imperium"},
  {crop:"energized_steel", tier:"imperium"},
  {crop:"certus_quartz", tier:"tertium", block:"ae2:quartz_block"},
  {crop:"fluix", tier:"imperium", block:"ae2:fluix_block"},
  {crop:"soularium", tier:"imperium"},
  {crop:"conductive_alloy", tier:"tertium"},
  {crop:"copper_alloy", tier:"tertium"},
  {crop:"end_steel", tier:"supremium"},
  {crop:"redstone_alloy", tier:"tertium"},
  {crop:"vibrant_alloy", tier:"supremium"},
  {crop:"dark_steel", tier:"imperium"},
  {crop:"pulsating_alloy", tier:"imperium"},
  {crop:"energetic_alloy", tier:"imperium"},
  {crop:"refined_glowstone", tier:"imperium", block:"mekanism:block_refined_glowstone"},
  {crop:"refined_obsidian", tier:"imperium", block:"mekanism:block_refined_obsidian"},
  {crop:"constantan", tier:"imperium"},
  {crop:"cyanite", tier:"supremium", block:"bigreactors:cyanite_block"},
  {crop:"graphite", tier:"tertium", block:"bigreactors:graphite_block"},
  {crop:"coal", tier:"inferium"},
  {crop:"aluminum", tier:"prudentium"},
  {crop:"tin", tier:"tertium"},
  {crop:"iron", tier:"tertium"},
  {crop:"silver", tier:"tertium"},
  {crop:"lead", tier:"tertium"},
  {crop:"zinc", tier:"tertium"},
  {crop:"copper", tier:"tertium"},
  {crop:"redstone", tier:"tertium", block:"minecraft:redstone_block"},
  {crop:"glowstone", tier:"tertium", block:"minecraft:glowstone"},
  {crop:"nether_quartz", tier:"tertium", block:"minecraft:quartz_block"},
  {crop:"obsidian", tier:"tertium", block:"allthecompressed:obsidian_2x"},
  {crop:"lapis_lazuli", tier:"imperium", block:"allthecompressed:lapis_block_1x"},
  {crop:"nickel", tier:"imperium"},
  {crop:"fluorite", tier:"imperium", block:"mekanism:block_fluorite"},
  {crop:"uranium", tier:"imperium"},
  {crop:"gold", tier:"imperium"},
  {crop:"osmium", tier:"imperium"},
  {crop:"emerald", tier:"supremium"},
  {crop:"diamond", tier:"supremium"},
  {crop:"uraninite", tier:"supremium"},
  {crop:"platinum", tier:"supremium"},
  {crop:"netherite", tier:"supremium"},
  {crop:"nether_star", tier:"insanium"},
]

ServerEvents.recipes(hscraft => {
  // infusion seed crafting
  function seedCrafting(output, middle, item1, item2, item3, item4, item5, item6, item7, item8){
    hscraft.custom({
      type: 'mysticalagriculture:infusion',
      input: { item: middle },
      ingredients: [
        { item: item1 },
        { item: item2 },
        { item: item3 },
        { item: item4 },
        { item: item5 },
        { item: item6 },
        { item: item7 },
        { item: item8 }
      ],
      result: { item: output }
    }).id(`144craft:${output.replace(':', '/')}/infusion`)
  }

  // make alloy seeds use blocks to craft
  cropAdjust.forEach(entry => {
    let ess = ''
    let block = ''

    if (entry.tier == 'insanium') {
      ess = `mysticalagradditions:insanium_essence`
    } else {
      ess = `mysticalagriculture:${entry.tier}_essence`
    }

    if (Item.exists(`allthecompressed:${entry.crop}_block_1x`)){
      // use the allthecompressed block if it exists
      block = `allthecompressed:${entry.crop}_block_1x`
    } else if (entry.block !== undefined){
      // else use the provided block in cropAdjust
      block = entry.block
    } else {
      // else neither exists, fallback to the first thing we can find via the storage_blocks tag
      block = Ingredient.of(`#forge:storage_blocks/${entry.crop}`).getItemIds()[0]
    }
    hscraft.remove({id:`mysticalagriculture:seed/infusion/${entry.crop}`})
    seedCrafting(`mysticalagriculture:${entry.crop}_seeds`, 'mysticalagriculture:prosperity_seed_base', ess, block, ess, block, ess, block, ess, block)
  })

  // idk silicon fix
  let items = Ingredient.of('#forge:silicon').itemIds

  items.forEach(item => {
    hscraft.shaped(Item.of(item, 8),
    [
      '   ',
      'AAA',
      '   '
    ],
    {
      A: 'mysticalagriculture:silicon_essence'
    })
  })
})