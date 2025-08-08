ServerEvents.recipes(hscraft => {

    hscraft.remove({ output: 'cataclysm:ignitium_upgrade_smithing_template' })

    hscraft.shaped('cataclysm:ignitium_upgrade_smithing_template', [
        'CBC',
        'BAB',
        'CBC'
    ],{
        A:'cataclysm:cursium_upgrade_smithing_template',
        B:'minecraft:blaze_powder',
        C:'ores144craft:element_144_ium'
    })

    hscraft.shaped(
      Item.of('cataclysm:ignitium_upgrade_smithing_template', 2),
      [
        'BCB',
        'CAC',
        'BCB'
      ],{
        A:'cataclysm:ignitium_upgrade_smithing_template',
        B:'kubejs:pure_element_144_ium',
        C:'minecraft:blaze_powder'
      }
    )

    hscraft.remove({ output: 'cataclysm:cursium_upgrade_smithing_template' })

    hscraft.shaped('cataclysm:cursium_upgrade_smithing_template', [
        'BBB',
        'CAC',
        'BBB'
    ],{
        A:'deeperdarker:warden_upgrade_smithing_template',
        B:'minecraft:gold_ingot',
        C:'cataclysm:black_steel_ingot'
    })

    hscraft.shaped(
      Item.of('cataclysm:cursium_upgrade_smithing_template', 2),
      [
        'BCB',
        'CAC',
        'BCB'
      ],{
        A:'cataclysm:cursium_upgrade_smithing_template',
        B:'minecraft:gold_ingot',
        C:'cataclysm:black_steel_ingot'
      }
    )
})
