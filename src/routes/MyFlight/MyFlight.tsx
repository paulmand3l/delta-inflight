import React from 'react';
import styles from './MyFlight.module.styl';

interface MyFlightProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
};

const MyFlight = (props: MyFlightProps) => {
  const {children, ...rest} = props;
  return (
    <div className={styles.MyFlight} {...rest}>
      {children}
    </div>
  );
};

export default MyFlight;
