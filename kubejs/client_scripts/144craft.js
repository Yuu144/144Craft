ItemEvents.tooltip(event => [
    event.add('kubejs:element_144_ium_block', Text.gold('Upsi pupsi, is hässlich wird bald gefixed')),
    event.add('kubejs:pure_element_144_ium_block', Text.gold('Upsi pupsi, is hässlich wird bald gefixed')),
    event.add('kubejs:energized_pure_element_144_ium_block', Text.gold('Upsi pupsi, is hässlich wird bald gefixed')),
    event.add('kubejs:sick_twig', Text.red('The sickest Twig of them all')),
    event.add('kubejs:144_smith_template', Text.red('You can find this within Nests of Tier-5 Dragons')),
    event.add('kubejs:dark_matter', Text.gold('Neues Rezept kommt demnächst')),
    event.add('ae2:creative_item_cell', Text.red('USE WITH CAUTION, MAY CORRUPT THE WORLD IF CHUNK IS OVERLOADED')),
    event.add('extradisks:infinite_storage_disk', Text.red('USE WITH CAUTION, MAY CORRUPT THE WORLD IF CHUNK IS OVERLOADED'))
  ])
  
  ClientEvents.lang('en_us', event => {
    event.renameItem('ores144craft:element_144_ium', 'Raw Element 144 Chunk')
  })

  ClientEvents.lang('en_gb', event => {
    event.renameItem('ores144craft:element_144_ium', 'Raw Element 144 Chunk')
  })