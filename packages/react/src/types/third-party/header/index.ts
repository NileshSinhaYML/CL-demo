type MenuLinkType = 'link' | 'button';

type NavBarModes = 'dark' | 'light';

interface MenuLink {
  label: string;
  type: MenuLinkType;
  url?: string;
  eventName?: string;
}

export interface NavBarOptions {
  mode?: NavBarModes;
  logo?: string;
  logoAltText?: string;
  headerText?: string;
  openMenuIcon?: {
    slotName: string;
  };
  closeMenuIcon?: {
    slotName: string;
  };
  menuLinks?: Array<MenuLink>;
  isMenuOpen?: boolean;
  topRightSlot?: {
    slotName: string;
  };
}
