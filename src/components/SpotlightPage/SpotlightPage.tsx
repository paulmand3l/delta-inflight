import React from 'react';
import Button from '../Button';
import deltaStudio from '~/assets/deltastudio.png';
import styles from './SpotlightPage.module.styl';

interface SpotlightPageProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  cta: string;
  startColor?: string;
  endColor?: string;
};

const SpotlightPage = (props: SpotlightPageProps) => {
  const {title, cta, startColor, endColor, ...rest} = props;
  return (
    <div className={styles.SpotlightPage} {...rest}>
      <div className={styles.banner}>
        <div className={styles.header}>
          <img src={deltaStudio} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <Button title={cta} />
        </div>
      </div>
    </div>
  );
};

export default SpotlightPage;
