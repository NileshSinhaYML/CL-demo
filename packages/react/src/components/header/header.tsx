import React, { ReactElement } from 'react';
import reactifyWc from 'reactify-wc';
import '../../third-party/index';
import { NavBarOptions } from '../../types/third-party/header';

interface HeaderProps {
  options: NavBarOptions;
  children?: ReactElement;
  hasSlot?: boolean;
}

const HeaderCL = reactifyWc<{ navOptions: NavBarOptions }>('header-component');

const Header = ({
  options,
  children = <></>,
  hasSlot = false,
  ...props
}: HeaderProps) => {
  return (
    <HeaderCL navOptions={options} {...props}>
      {hasSlot && <div slot={options?.topRightSlot?.slotName}>{children}</div>}
    </HeaderCL>
  );
};

export default Header;
