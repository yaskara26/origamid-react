import React, { PropsWithChildren, ReactNode } from 'react'
import styles from './Button.module.css'

const Button = ({ children, ...props }: PropsWithChildren): ReactNode => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  );
};

export default Button
