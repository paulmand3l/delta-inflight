import orderBy from 'lodash/orderBy';
import React from 'react';
import MediaSelector from '~/components/MediaSelector';
import styles from './Music.module.styl';
import movies from '~/assets/movies/movies.json';
import { posters } from '~/assets/movies/posters';

interface MusicProps extends React.ComponentPropsWithoutRef<'div'> {
};

const Music = (props: MusicProps) => {
  const {...rest} = props;
  return (
    <MediaSelector name="movies"
      media={orderBy(movies, (m) => m[1]).map((movie) => {
        const [id, name, rating, genres] = movie as [number, string, number, string[]];
        return [name, posters[id]];
      })}
      filters={[
        'Playlists by Spotify',
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
        'Music in Chinese',
        'Music in French',
        'Music in German',
        'Music in Hindi',
        'Music in Italian',
        'Music in Japanese',
        'Music in Korean',
        'Music in Portuguese',
        'Music in Spanish'
      ]}
      />
  );
};

export default Music;
