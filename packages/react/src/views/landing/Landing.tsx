import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import AvatarComponent from '../../components/avatar/avatar';
import { Dropdown } from 'react-bootstrap';
import { landingPageConfig } from './landing.config';
import { imageSources, dropDownMenuItems } from '../../constants/views/Landing';

import { AvatarTypes } from '../../constants/components/avatar';
import { NavbarModes } from '../../constants/components/header';

import './_landing.scss';
import Avatar from 'react-avatar';

const Landing = () => {
  const [isDarkMode, updateMode] = useState<boolean>(true);
  const [showDropDown, toggleDropDown] = useState<boolean>(false);
  const getImageSource = (): string =>
    isDarkMode ? imageSources.dark : imageSources.light;

  const customEventHandler = () => {
    alert('clicked');
  };

  return (
    <div className="app-landing">
      <h1>React Application utilizing Header Component</h1>
      {landingPageConfig?.options?.map(
        (
          {
            name,
            config,
            hasCustomStyling,
            hasSlot,
            hasSlotWithCustomComponents,
          },
          index
        ) => (
          <div
            key={index}
            className={`app-landing-variant ${
              hasCustomStyling ? 'app-landing-variant-custom' : ''
            }`}
          >
            <h2>{name}</h2>
            <header className="app-header">
              <Header
                options={
                  name === 'With Right Slot'
                    ? {
                        ...config,
                        mode: isDarkMode ? NavbarModes.Dark : NavbarModes.Light,
                      }
                    : { ...config }
                }
                hasSlot={hasSlot}
                on-button-click={customEventHandler}
              >
                <>
                  {hasSlotWithCustomComponents ? (
                    <Dropdown>
                      <Dropdown.Toggle>
                        <Avatar name="Demo" size="35" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {dropDownMenuItems?.map((item, key) => (
                          <Dropdown.Item key={`${item}-${index}`}>
                            {item}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <AvatarComponent
                      type={AvatarTypes.Image}
                      imageAlt="Theme Icon"
                      source={getImageSource()}
                      handleClick={() => updateMode(!isDarkMode)}
                    />
                  )}
                </>
              </Header>
            </header>
          </div>
        )
      )}
    </div>
  );
};

export default Landing;
