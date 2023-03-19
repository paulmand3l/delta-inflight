import React from 'react';
import styles from './RoutePortal.module.styl';
import Header from './Header';
import { useRecoilValue } from 'recoil';
import { routeAtom } from '~/store';
import TopPicks from '~/routes/TopPicks';
import Movies from '~/routes/Movies';
import Shows from '~/routes/Shows';
import Music from '~/routes/Music';

interface RoutePortalProps extends React.ComponentPropsWithoutRef<'div'> {
};

const getRouteComponent = (route: string): React.ComponentType => {
  switch (route) {
    case 'Top Picks': return TopPicks;
    case 'Movies': return Movies;
    case 'Series': return Shows;
    case 'Spotify Audio': return Music;
  }

  return TopPicks;
};

const RoutePortal = (props: RoutePortalProps) => {
  const currentRoute = useRecoilValue(routeAtom);

  const RouteComponent = getRouteComponent(currentRoute);

  const {children, ...rest} = props;
  return (
    <div className={styles.RoutePortal} {...rest}>
      <Header />
      <RouteComponent />
    </div>
  );
};

export default RoutePortal;
