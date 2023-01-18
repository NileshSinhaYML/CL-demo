import React, { forwardRef } from 'react';

import Button from '../button/button';

import { AvatarType } from '../../types/components/avatar';
import { AvatarTypes } from '../../constants/components/avatar';

import './_avatar.scss';

interface AvatarProps {
  type: AvatarType;
  text?: string;
  source?: string;
  imageAlt?: string;
  handleClick?: () => void;
}

const Avatar = forwardRef<HTMLButtonElement, AvatarProps>(
  (
    {
      type,
      text = 'Avatar',
      source = '',
      imageAlt = '',
      handleClick,
    }: AvatarProps,
    ref
  ) => {
    const isText: boolean = type === AvatarTypes?.Text;
    return (
      <div
        className={`app-avatar d-flex align-items-center justify-content-center ${
          isText ? 'app-avatar-text' : ''
        }`}
      >
        <Button handleClick={handleClick} ref={ref}>
          {isText ? (
            <p>{text?.charAt(0)}</p>
          ) : (
            <img src={source} alt={imageAlt} />
          )}
        </Button>
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
