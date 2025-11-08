ServerEvents.recipes(hscraft => {

    hscraft.remove({ output: 'structurecompass:structure_compass' })

    hscraft.shaped('structurecompass:structure_compass',[
        ' B ',
        'BAB',
        ' B '
    ],{
        A:'minecraft:compass',
        B:'ores144craft:element_144_ium'
    })
    
})