const basicPokedexSchema = {
	type: 'object',
	title: 'Pokèmon',
	properties: {
		Name: {
			type: 'string',
			minLength: 5,
			examples: ['Pikachu', 'Snorlax', 'Charmander', 'Bulbasaur'],
		},
		Height: {
			type: 'number',
		},
		Weight: {
			type: 'number',
		},
		Description: {
			type: 'string',
		},
		Category: {
			type: 'string',
			maxLength: 20,
		},
		Abilities: {
			type: 'string',
		},
		pokedex_number: {
			title: 'National Pokèdex Number',
			type: 'number',
		},
		caught: {
			type: 'boolean',
		},
		first_seen: {
			title: 'First seen',
			description: 'The first time you saw this pokèmon',
			type: 'string',
			format: 'date-time',
		},
		poke_password: {
			title: 'Poke Password',
			description: "Password to access the pokèmon's abilities",
			type: 'string',
		},
		environment: {
			type: 'string',
			oneOf: [
				{
					const: 'earth',
					title: 'Earth',
				},
				{
					const: 'water',
					title: 'Water',
				},
				{
					const: 'fire',
					title: 'Fire',
				},
			],
		},
		tags: {
			title: 'Tags',
			description: 'Add useful tags to your pokèmon',
			type: 'array',
			items: {
				type: 'string',
			},
		},
	},
};

export default basicPokedexSchema;
