import { render, screen } from '@testing-library/react';
import App from './App';
import schema from 'data/schema';

test('renders submit button and output', () => {
  render(<App schema={schema}/>);
  screen.getByText(/Submit/i);
  screen.getByText(/Output/i);
});


const schemaInput = {
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

test('renders title and input', () => {
  render(<App schema={schemaInput}/>);
  screen.getByText(/Test title/i);
  screen.getByText(/Name/i);
  screen.getByText(/Pikachu/i);
  screen.getByText(/Minimum/i);
});


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
