ServerEvents.recipes(hscraft => {
    [
        'cyclic:heart'
    ]
    .forEach((recipeID) => hscraft.remove({id: recipeID}));
})