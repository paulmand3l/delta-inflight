import React from 'react';
import Pager from '~/components/Pager';
import SpotlightPage from '~/components/SpotlightPage';
import styles from './TopPicks.module.styl';

interface TopPicksProps extends React.ComponentPropsWithoutRef<'div'> {
};

const TopPicks = (props: TopPicksProps) => {
  const {children, ...rest} = props;
  return (
    <Pager className={styles.TopPicks} {...rest}>
      <SpotlightPage title='New Releases' cta="See Titles" />
      <SpotlightPage title="Women's History Month" cta="See Titles" />
      <SpotlightPage title="Around the World" cta="See Titles" />
      <SpotlightPage title="Popular on Delta" cta="See Titles" />
      <SpotlightPage title="Women We Love on TV" cta="See Titles" />
      <SpotlightPage title="Award Worthy Films" cta="See Titles" />
      <SpotlightPage title="Sibling Rivalry" cta="See Titles" />
      <SpotlightPage title="Delta Premier Partners" cta="See Titles" />
      <SpotlightPage title="MasterClass" cta="See Titles" />
      <SpotlightPage title="Spotify" cta="See Titles" />
      <SpotlightPage title="Delta On-Air" cta="See Titles" />
    </Pager>
  );
};

export default TopPicks;
