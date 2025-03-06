ServerEvents.recipes(hscraft => {
    //PZB
    hscraft.shaped('create_train_additions:pzb', [
        'DCD',
        'ABA',
        'ABA'
    ],{
        A: 'minecraft:iron_ingot',
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
        result: Ingredient.of('create:creative_blaze_cake').toJson(),
        acceptMirrored: false
      }).id('144craft:create/creative_blaze_cake')
})