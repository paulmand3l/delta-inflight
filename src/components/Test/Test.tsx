import React from 'react';
import styles from './Test.module.scss';

interface TestProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
};

const Test = (props: TestProps) => {
  const {children, ...rest} = props;
  return (
    <div className={styles.Test} {...rest}>
      {children}
    </div>
  );
};

export default Test;
