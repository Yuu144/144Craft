ServerEvents.recipes(hscraft => {
    hscraft.remove({ output: 'bhc:green_heart_canister' })

    hscraft.shaped(
        Item.of('bhc:green_heart_canister', 1),
        [
          'AB',
          'CD'
        ],
        {
          A: 'bhc:green_heart',
          B: 'bhc:yellow_heart_canister',
          C: '#forge:nether_stars',
          D: 'cataclysm:witherite_ingot'
    })

    hscraft.remove({ output: 'bhc:blue_heart_canister' })

    hscraft.shaped(
        Item.of('bhc:blue_heart_canister', 1),
        [
          'AB',
          'CD'
        ],
        {
          A: 'bhc:blue_heart',
          B: 'bhc:green_heart_canister',
          C: 'minecraft:netherite_block',
          D: 'cataclysm:cursium_ingot'
    })
})