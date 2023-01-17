import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Avatar from '../../components/avatar/avatar';
import { landingPageConfig } from './landing.config';
import { imageSources } from '../../constants/views/Landing';

import { AvatarTypes } from '../../constants/components/avatar';
import { NavbarModes } from '../../constants/components/header';

import './_landing.scss';

const Landing = () => {
  const [isDarkMode, updateMode] = useState<boolean>(true);
  const getImageSource = (): string =>
    isDarkMode ? imageSources.dark : imageSources.light;

  const customEventHandler = () => {
    alert('clicked');
  };

  return (
    <div className="app-landing">
      {landingPageConfig?.options?.map(
        ({ name, config, hasCustomStyling, hasSlot }, index) => (
          <div
            key={index}
            className={`app-landing-variant ${
              hasCustomStyling ? 'app-landing-variant-custom' : ''
            }`}
          >
            <h1>{name}</h1>
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
                <Avatar
                  type={AvatarTypes.Image}
                  imageAlt="Theme Icon"
                  source={getImageSource()}
                  handleClick={() => updateMode(!isDarkMode)}
                />
              </Header>
            </header>
          </div>
        )
      )}
    </div>
  );
};

export default Landing;
