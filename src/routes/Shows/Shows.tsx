import orderBy from 'lodash/orderBy';
import React from 'react';
import MediaSelector from '~/components/MediaSelector';
import styles from './Shows.module.styl';
import movies from '~/assets/movies/movies.json';
import { posters } from '~/assets/movies/posters';

interface ShowsProps extends React.ComponentPropsWithoutRef<'div'> {
};

const Shows = (props: ShowsProps) => {
  const {...rest} = props;
  return (
    <MediaSelector name="movies"
      media={orderBy(movies, (s) => s[1]).map((show) => {
        const [id, name, rating, genres] = show as [number, string, number, string[]];
        return [name, posters[id]];
      })}
      filters={[
        'Shows A-Z',
        'New Releases',
        'New Onboard',
        'Under 2 Hours',
        'Closed Caption',
        'Audio Descriptive',
        'Action & Adventure',
        'Comedy',
        'Critically Acclaimed',
        'Documentary',
        'Drama',
        'Kids',
        'Movies in Chinese',
        'Movies in French',
        'Movies in German',
        'Movies in Hindi',
        'Movies in Italian',
        'Movies in Japanese',
        'Movies in Korean',
        'Movies in Portuguese',
        'Movies in Spanish'
      ]}
      />
  );
};

export default Shows;
