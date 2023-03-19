import React, { useEffect, useRef, useState } from 'react';
import styles from './Draggable.module.styl';

interface DraggableProps {
  limits: [number, number];
  children: (offset: number) => React.ReactNode;
};

const Draggable = (props: DraggableProps) => {
  const {children, limits, ...rest} = props;
  const dragRef = useRef<HTMLDivElement | null>();
  const dragStart = useRef(0);
  const dragDelta = useRef(0);
  const dragOffset = useRef(0);
  const [renderTranslation, setRenderTranslation] = useState(0);

  const getTranslation = (t: number) => Math.max(-limits[1], Math.min(limits[0], t));

  const handleMouseDown = (e: MouseEvent) => {
    console.log('mousedown');
    dragRef.current?.addEventListener('mousemove', handleMouseMove);
    dragStart.current = e.pageX;
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    dragDelta.current = e.pageX - dragStart.current;
    const translation = getTranslation(dragOffset.current + dragDelta.current);

    if (dragRef.current) {
      dragRef.current.style.transform = `translateX(${translation}px)`;
    }

    setRenderTranslation(translation);
  }

  const handleMouseUp = (e: MouseEvent) => {
    dragRef.current?.removeEventListener('mousemove', handleMouseMove);
    dragOffset.current = getTranslation(dragOffset.current + dragDelta.current);
  }

  useEffect(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (dragRef.current) {
        console.log('unregistering');
        dragRef.current.removeEventListener('mousedown', handleMouseDown);
        dragRef.current.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);

  return (
    <div className={styles.Draggable} {...rest} ref={(ref) => dragRef.current = ref}>
      {children(renderTranslation)}
    </div>
  );
};

export default Draggable;
