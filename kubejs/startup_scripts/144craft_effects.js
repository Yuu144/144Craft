StartupEvents.registry('mob_effect', hscraft => {
    hscraft.create('gravitational_pressure').modifyAttribute('forge:entity_gravity',
        '0e38f06d-8f65-418c-b88e-12a13ae98412',
        2, 'multiply_total').color(Color.BLACK)
})
