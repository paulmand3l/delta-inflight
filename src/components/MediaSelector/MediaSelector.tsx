import React, { useState } from 'react';
import styles from './MediaSelector.module.styl';
import { Media } from './types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ViewOptions from './ViewOptions';
import { useViewMode } from '~/hooks/useViewMode';
import Draggable from '../Draggable';

interface MediaSelectorProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  media: Media[];
  filters: string[];
};

const MediaSelector = (props: MediaSelectorProps) => {
  const {name, media, filters, ...rest} = props;
  const [selectedFilter] = useState(filters[0]);
  const [isFilterSelectorVisible, setFilterSelectorVisible] = useState(false);
  const [viewMode] = useViewMode(name);

  return (
    <div className={styles.MediaSelector} {...rest}>
      <div className={styles.options}>
        <div className={styles.filter}>
          <div className={styles.title}>
            { selectedFilter }
          </div>
          <div className={styles.icons}>
            SELECT
            <ArrowDropDownIcon fontSize='large'/>
          </div>
        </div>

        <ViewOptions name={name} />
      </div>

        <div className={`${styles.mediaContainer} ${styles[viewMode]}`}>
          <Draggable limits={[0, media.length * (285 + 16)]}>
            { (translation) => (
              <div className={styles.media}>
                { media.map(([title, posterSrc]) => {
                  return (
                    <div key={title} className={styles.medio}>
                      <img className={styles.poster} src={posterSrc} draggable={false} />
                      <div className={styles.mediaTitle}>{title}</div>
                    </div>
                  );
                }) }
              </div>
            )}
          </Draggable>
        </div>
    </div>
  );
};

export default MediaSelector;
