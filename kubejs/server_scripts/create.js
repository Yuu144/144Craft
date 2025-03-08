ServerEvents.recipes(hscraft => {
    //PZB
    hscraft.shaped('create_train_additions:pzb', [
        'DCD',
        'ABA',
        'ABA'
    ],{
        A: 'thermal:steel_ingot',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:yellow_dye',
        D: 'industrialforegoing:plastic'
    })

    //Creative Motor
    hscraft.custom({
        type: "create:mechanical_crafting",
        pattern: [
          'EABAE',
          'FCDCF',
          'EABAE'
          ],
          key: {
            A: Ingredient.of('create_new_age:advanced_motor_extension').toJson(),
            B: Ingredient.of('create_new_age:reinforced_motor').toJson(),
            C: Ingredient.of('createaddition:electric_motor').toJson(),
            D: Ingredient.of('kubejs:-null-').toJson(),
            E: Ingredient.of('kubejs:pure_element_144_ium').toJson(),
            F: Ingredient.of('create_new_age:overcharged_diamond').toJson()
        },
        result: Ingredient.of('create:creative_motor').toJson(),
        acceptMirrored: false
      }).id('144craft:create/creative_motor')

      //Creative Blaze Cake
      hscraft.custom({
        type: "create:mechanical_crafting",
        pattern: [
          'CADAC',
          'ADBDA',
          'CADAC'
          ],
          key: {
            A: Ingredient.of('create:blaze_cake').toJson(),
            B: Ingredient.of('kubejs:-null-').toJson(),
            C: Ingredient.of('ores144craft:element_144_ium').toJson(),
            D: Ingredient.of('create:cinder_flour').toJson()
        },
        result: Item.of('6x create:creative_blaze_cake').toJson(),
        acceptMirrored: false
      }).id('144craft:create/creative_blaze_cake')

      //Creative Spellbook
      hscraft.custom({
        type: "create:mechanical_crafting",
        pattern: [
          'CADAC',
          'ADBDA',
          'CADAC'
          ],
          key: {
            A: Ingredient.of('ars_nouveau:archmage_spell_book').toJson(),
            B: Ingredient.of('kubejs:-null-').toJson(),
            C: Ingredient.of('').toJson()
        },
        result: Ingredient.of('ars_nouveau:creative_spell_book').toJson(),
        acceptMirrored: false
      }).id('144craft:ars_nouveau/creative_spell_book')
})