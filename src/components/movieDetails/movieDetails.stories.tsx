import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieDetails from './index';

export default {
  title: 'Movie Details',
  component: MovieDetails,
} as ComponentMeta<typeof MovieDetails>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MovieDetails> = (args) => (
  <MovieDetails {...args} />
);

export const PulpFiction = Template.bind({});

PulpFiction.args = {
  imageUrl: '/images/Pulp Fiction.png',
  movieName: 'Pulp Fiction',
  releaseYear: '2003',
  rating: 8.9,
  genres: ['Drama', 'Biography', 'Music'],
  duration: 154,
  description: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit
    men who are out to retrieve a suitcase stolen from their employer, mob boss 
    Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his 
    wife Mia (Uma Thurman) out a few days later when Wallace himself will be 
    out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by 
    Wallace to lose his fight. The lives of these seemingly unrelated people are 
    woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra`,
};
