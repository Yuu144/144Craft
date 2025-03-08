ServerEvents.recipes(hscraft => {
    //Creative Spellbook
    hscraft.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": Item.of("ars_nouveau:creative_spell_book").toJson(),
        "pedestalItems": [
          {"item": Ingredient.of('ars_nouveau:archmage_spell_book').toJson()},
          {"item": Ingredient.of('ars_nouveau:archmage_spell_book').toJson()},
          {"item": Ingredient.of('ars_nouveau:source_gem').toJson()},
          {"item": Ingredient.of('ars_nouveau:source_gem').toJson()},
          {"item": Ingredient.of('ars_nouveau:source_gem').toJson()},
          {"item": Ingredient.of('ars_nouveau:source_gem').toJson()},
          {"item": Ingredient.of('ars_nouveau:thread_magic_capacity').toJson()},
          {"item": Ingredient.of('ars_nouveau:thread_spellpower').toJson()},
          {"item": Ingredient.of('cataclysm:ignitium_ingot').toJson()}
        ],
        "reagent": [Item.of("kubejs:-null-").toJson()],
        "sourceCost": 5000
      }).id('144craft:ars_nouveau/creative_spell_book')
})