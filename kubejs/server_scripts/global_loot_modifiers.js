const global_modifiers = [
    "farmersdelight:add_loot_abandoned_mineshaft",
    "farmersdelight:add_loot_bastion_hoglin_stable",
    "farmersdelight:add_loot_bastion_treasure",
    "farmersdelight:add_loot_end_city_treasure",
    "farmersdelight:add_loot_pillager_outpost",
    "farmersdelight:add_loot_ruined_portal",
    "farmersdelight:add_loot_shipwreck_supply",
    "farmersdelight:add_loot_simple_dungeon",
    "farmersdelight:add_loot_village_butcher",
    "farmersdelight:add_loot_village_desert_house",
    "farmersdelight:add_loot_village_plains_house",
    "farmersdelight:add_loot_village_savanna_house",
    "farmersdelight:add_loot_village_snowy_house",
    "farmersdelight:add_loot_village_taiga_house",
    "pneumaticcraft:dungeon_loot"
]

LootJS.modifiers((event) => {
    global_modifiers.forEach((modifier) => {
        event.removeGlobalModifier(modifier);
    });
});