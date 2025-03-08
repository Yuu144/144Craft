ServerEvents.recipes(hscraft => {

    //Creative Wireless Crafting Monitor
    hscraft.custom({
        type: 'powah:energizing',
        ingredients: [
          Ingredient.of('refinedstorage:wireless_crafting_monitor').toJson(),
          Ingredient.of('kubejs:-null-')
        ],
        energy: '90000000',
      result: Item.of('refinedstorage:creative_wireless_crafting_monitor').toJson()
      }).id('144craft:energizing/creative_wireless_crafting_monitor')
})