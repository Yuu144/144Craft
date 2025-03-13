ItemEvents.modification(event => {
    event.modify('mekanismtools:refined_obsidian_helmet', item => {
      item.armorProtection = 3
      item.armorToughness = 3
    })

    event.modify('mekanismtools:refined_obsidian_chestplate', item => {
        item.armorProtection = 7
        item.armorToughness = 4
    })

      event.modify('mekanismtools:refined_obsidian_leggings', item => {
        item.armorProtection = 6
        item.armorToughness = 3
    })

    event.modify('mekanismtools:refined_obsidian_boots', item => {
        item.armorProtection = 3
        item.armorToughness = 3
    })
  })