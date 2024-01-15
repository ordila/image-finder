import React, { FC } from 'react';
import { Triangle } from 'react-loader-spinner';
import { ILoader } from './Loader.types';

export const Loader: FC<ILoader> = ({ isLoading }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        visible={isLoading}
      />
    </div>
  );
};
