import { FC } from 'react';
import css from './Button.module.css';
import { IButton } from './Button.types';

export const Button: FC<IButton> = ({ onButtonClick }) => {
  return (
    <button className={css.button} onClick={onButtonClick} type="button">
      Load more
    </button>
  );
};
