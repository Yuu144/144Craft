const tags = [
//  { tag: 'spartanweaponry:diamond_weapons', rarity: 'RARE' }
]

ServerEvents.tags('item', event => {
  tags.forEach(obj => {
    let items = event.get(obj.tag).getObjectIds();

    items.forEach(item => {
      console.log("{ item: '" + item + "', rarity: '" + obj.rarity + "' },")
    })
  })
});
