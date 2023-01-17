import React from 'react';

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

const Avatar = ({
  type,
  text = 'Avatar',
  source = '',
  imageAlt = '',
  handleClick,
}: AvatarProps) => {
  const isText: boolean = type === AvatarTypes?.Text;
  return (
    <div
      className={`app-avatar d-flex align-items-center justify-content-center ${
        isText ? 'app-avatar-text' : ''
      }`}
    >
      <Button handleClick={handleClick}>
        {isText ? (
          <p>{text?.charAt(0)}</p>
        ) : (
          <img src={source} alt={imageAlt} />
        )}
      </Button>
    </div>
  );
};

export default Avatar;
