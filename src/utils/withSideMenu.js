import React from 'react';
import SideMenu from 'react-native-side-menu-updated';
import Menu from '../components/menu/menu';
import useMenuButton from './useMenuButton';
import {moderateScale} from 'react-native-size-matters';

const withSideMenu = (Component, isHomeScreen) =>
  React.forwardRef((props, ref) => {
    const {isOpen, setIsOpen} = useMenuButton();

    return (
      <SideMenu
        menu={<Menu isHome={isHomeScreen} />}
        isOpen={isOpen}
        menuPosition="right"
        disableGestures
        onChange={state => {
          setIsOpen(state);
        }}
        overlayColor="#0008"
        bounceBackOnOverdraw={false}
        openMenuOffset={moderateScale(250)}>
        <Component {...props} ref={ref} />
      </SideMenu>
    );
  });

export default withSideMenu;
