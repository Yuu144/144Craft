ServerEvents.recipes(hscraft => {
    //-null- Crafting
    hscraft.custom({
      type: "create:mechanical_crafting",
      pattern: [
      '    O    ',
      '   FEF   ',
      '   EBE   ',
      ' FEADAEF ',
      'OEBDCDBEO',
      ' FEADAEF ',
      '   EBE   ',
      '   FEF   ',
      '    O    '
      ],
      key: {
        O: Ingredient.of('create:cogwheel').toJson(),
        A: Ingredient.of('draconicevolution:chaos_shard').toJson(),
        B: Ingredient.of('draconicevolution:large_chaos_frag').toJson(),
        C: Ingredient.of('kubejs:pure_element_144-ium').toJson(),
        D: Ingredient.of('cataclysm:ignitium_block').toJson(),
        E: Ingredient.of('draconicevolution:awakened_draconium_block').toJson(),
        F: Ingredient.of('mekanism:pellet_antimatter').toJson()
        
      },
      result: Ingredient.of('kubejs:-null-').toJson(),
      acceptMirrored: false
    }).id('144craft:kubejs/-null-')

    //pure 144ium
    hscraft.custom({
      "type": "mekanism:nucleosynthesizing",
      "itemInput": {
        "amount": 1,
        "ingredient": {
          "item": "kubejs:element_144-ium"
        }
      },
      "gasInput": {
        "amount": 10,
        "gas": "mekanism:antimatter"
      },
      "output": {
        "count": 1,
        "item": "kubejs:pure_element_144-ium"
      },
      "duration": 5000
    }).id('144craft:nucleosynthesizing/pure_144-ium')
})
