import React from 'react';
import { useViewMode } from '~/hooks/useViewMode';
import styles from './ViewOptions.module.styl';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

interface ViewOptionsProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
};

const ViewOptions = (props: ViewOptionsProps) => {
  const {name, ...rest} = props;
  const [viewMode, setViewMode] = useViewMode(name);
  return (
    <div className={styles.ViewOptions} {...rest}>
      <div className={viewMode === 'column' ? styles.active : ''} onClick={() => setViewMode('column')}>
        <ViewColumnIcon fontSize='inherit'/>
      </div>
      <div className={viewMode === 'grid' ? styles.active : ''} onClick={() => setViewMode('grid')}>
        <ViewModuleIcon fontSize='inherit'/>
      </div>
    </div>
  );
};

export default ViewOptions;
