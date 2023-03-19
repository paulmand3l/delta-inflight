import React from 'react';
import logo from '~/assets/deltalogo.png';
import NavLink from './NavLink';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Sidebar.module.styl';

interface SidebarProps extends React.ComponentPropsWithoutRef<'div'> {
};

const Sidebar = (props: SidebarProps) => {
  const {children, ...rest} = props;
  return (
    <div className={styles.Sidebar}>
      <img className={styles.logo} src={logo} />
      <div className={styles.navlinks}>
        <NavLink route="Top Picks" />
        <NavLink route="Movies" />
        <NavLink route="Series" />
        <NavLink route="Spotify Audio" />
        <NavLink route="My Flight" />
        <NavLink route="About Delta" />
        <NavLink route="Food & Drink" />
        <NavLink route="More" />
      </div>
      <div className={styles.search}>
        Search
        <span className={styles.searchicon}>
          <SearchIcon fontSize='inherit'/>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
