import { render, screen } from '@testing-library/react';
import App from './App';
import schema from 'data/schema';

// ###########################################################################################

test('renders submit button and output', () => {
  render(<App schema={schema}/>);
  screen.getByText(/Submit/i);
  screen.getByText(/Output/i);
});

// ###########################################################################################

const schemaInput = {
	type: 'object',
	title: 'Test title',
	properties: {
		Name: {
			type: 'string',
		},
    },
};

test('renders title and input', () => {
  render(<App schema={schemaInput}/>);
  screen.getByText(/Test title/i);
  screen.getByText(/Name/i);
});

// ###########################################################################################

const schemaExamples = {
	type: 'object',
	title: 'Test title',
	properties: {
		Name: {
			type: 'string',
			minLength: 5,
			examples: ['Pikachu', 'Snorlax', 'Charmander', 'Bulbasaur'],
		},
    },
};

test('renders examples', () => {
	render(<App schema={schemaExamples}/>);
	screen.getByText(/Pikachu/i);
	screen.getByText(/Snorlax/i);
	screen.getByText(/Charmander/i);
	screen.getByText(/Bulbasaur/i);
});

// ###########################################################################################

const schemaDescription = {
	type: 'object',
	title: 'Test title',
	properties: {
		Name: {
			type: 'string',
			minLength: 5,
			maxLength: 10,
			description: 'Description',
		},
    },
};

test('renders description and length', () => {
	render(<App schema={schemaDescription}/>);
	screen.getByText(/Description:/i);
	screen.getByText(/Minimum length:/i);
	screen.getByText(/Maximum length:/i);
});

// ###########################################################################################

const schemaSelect = {
	type: 'object',
	title: 'Test title',
	properties: {
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
	},
};

test('renders select', () => {
  render(<App schema={schemaSelect}/>);
  screen.getByText(/Test title/i);
  screen.getByText(/Earth/i);
  screen.getByText(/Water/i);
  screen.getByText(/Fire/i);
});

// ###########################################################################################

const schemaDate = {
	type: 'object',
	title: 'Test title',
	properties: {
		first_seen: {
			title: 'First seen',
			description: 'The first time you saw this pokèmon',
			type: 'string',
			format: 'date-time',
		},
	},
};

test('renders date input', () => {
	render(<App schema={schemaDate}/>);
	screen.getByText(/First seen/i);
	screen.getByText(/The first time you saw this pokèmon/i);
});

// ###########################################################################################

const schemaArray = {
	type: 'object',
	title: 'Test title',
	properties: {
		tags: {
			title: 'Name',
			description: 'Add useful tags to your pokèmon',
			type: 'array',
			items: {
				type: 'string',
			},
		},
	},
};

test('renders array input', () => {
	render(<App schema={schemaArray}/>);
	screen.getByText(/Name/i);
	screen.getByText(/Add useful tags to your pokèmon/i);
	screen.getByPlaceholderText(/Type and press enter/i);
});

// ###########################################################################################

const schemaFailure = {
	type: 'anything',
	title: 'Test title',
	properties: {
		Name: {
			type: 'string',
			minLength: 5,
			examples: ['Pikachu', 'Snorlax', 'Charmander', 'Bulbasaur'],
		},
    },
};

test('renders no schema message', () => {
  render(<App schema={schemaFailure}/>);
  screen.getByText(/Nothing to render/i);
});
