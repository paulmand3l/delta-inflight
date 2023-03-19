import React from 'react';
import styles from './Button.module.styl';

interface ButtonProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  onClick?: () => any;
};

const Button = (props: ButtonProps) => {
  const {title, onClick, ...rest} = props;
  return (
    <div className={styles.Button} onClick={onClick} {...rest}>
      {title}
    </div>
  );
};

export default Button;
