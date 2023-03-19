import React from 'react';
import styles from './Header.module.styl';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';

interface HeaderProps extends React.ComponentPropsWithoutRef<'div'> {
};

const Header = (props: HeaderProps) => {
  const {...rest} = props;
  return (
    <div className={styles.Header} {...rest}>
      <div className={styles.leftStuff}>
        <AccessTimeIcon />
        4h 31m Until Arrival
        <div className={styles.flightTrackerLink}>
          Flight Tracker
        </div>
      </div>

      <SettingsIcon fontSize='large'/>
    </div>
  );
};

export default Header;
