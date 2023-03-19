import React from 'react';
import styles from './NavLink.module.styl';
import { linkTappedAtom, routeAtom, showMoreAtom } from '~/store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface NavLinkProps extends React.ComponentPropsWithoutRef<'div'> {
  route: string;
};

const NavLink = (props: NavLinkProps) => {
  const {route, ...rest} = props;
  const [currentRoute, setCurrentRoute] = useRecoilState(routeAtom);
  const [currentLink, setCurrentLink] = useRecoilState(linkTappedAtom);
  const [showMore, setShowMore] = useRecoilState(showMoreAtom);

  const handleClick = () => {
    if (route === 'More') {
      setShowMore(!showMore);
    } else {
      setCurrentRoute(route);
    }

    setCurrentLink(route);
  }

  return (
    <div className={`${styles.NavLink} ${route === currentLink ? styles.active : ''}`} onClick={handleClick} {...rest}>
      { route }
      { route === 'More' ? showMore ? (
        <KeyboardArrowUpIcon fontSize='large' />
      ) : (
        <KeyboardArrowDownIcon fontSize='large' />
      ) : null }
    </div>
  );
};

export default NavLink;
