import React from 'react';
import RoutePortal from './RoutePortal';
import styles from './Layout.module.styl';
import Sidebar from './Sidebar';

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
};

const Layout = (props: LayoutProps) => {
  const {children, ...rest} = props;
  return (
    <div className={styles.Layout} {...rest}>
      <Sidebar />
      <RoutePortal />
    </div>
  );
};

export default Layout;
