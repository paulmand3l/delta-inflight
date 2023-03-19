import React, { useRef, useState } from 'react';
import styles from './Pager.module.styl';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const mod = (n: number, m: number): number => {
  if (n < 0) return mod(n + m, m);
  if (n >= m) return mod(n - m, m);
  return n;
}

interface PagerProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode[]
};

const Pager = (props: PagerProps) => {
  const {children, className, ...rest} = props;
  const pagerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  if (pagerRef.current) {
    for(let childEl of pagerRef.current.children) {
      childEl.style.transform = `translateX(-${pagerRef.current.offsetWidth * currentPage}px)`;
    }
  }

  const handlePage = (offset: number) => () => {
    const newPage = mod(currentPage + offset, (children ?? []).length);
    console.log(newPage);
    setCurrentPage(newPage);
  }

  return (
    <div className={`${styles.Pager} ${className}`} {...rest}>
      <div className={styles.pagerButtons}>
        <ChevronLeftIcon fontSize='inherit' onClick={handlePage(-1)} />
        <ChevronRightIcon fontSize='inherit' onClick={handlePage(1)} />
      </div>
      <div className={styles.pages} ref={(ref) => pagerRef.current = ref}>
        {children}
      </div>
    </div>
  );
};

export default Pager;
