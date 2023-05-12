import { West } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { setThemeMode } from '@/store/appSlice';

import MenuItem from './menuItem';
import SubMenuItem from './subMenuItem';

import styles from './index.module.scss';

interface MenuType {
  path: string;
  menuName: string;
  icon?: AnyType;
  children?: MenuType[];
}

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();

  const menuList: MenuType[] = [
    { path: '/home', menuName: '主页', icon: AdbIcon },
    {
      path: '/',
      menuName: '测试',
      icon: AdbIcon,
      children: [{ path: '/detail', menuName: '详情页面' }]
    }
  ];

  const app = useAppSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();
  const onChangeTheme = () => {
    dispatch(setThemeMode(theme.palette.mode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box className={styles.sidebarWrapper} sx={{ backgroundColor: theme.palette.cardBg.main }}>
      <Button onClick={onChangeTheme}>改变</Button>
      <span>{theme.palette.mode}</span>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 16px 8px 32px',
          height: '70px'
        }}>
        <Box sx={{ fontWeight: 700, fontSize: '20px', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
          Unitree
        </Box>
        <IconButton>
          <West sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <SimpleBar className={styles.sidebarMenuList}>
        <Box sx={{ paddingLeft: '16px', paddingRight: '16px', height: '100%' }}>
          <Box component="p" className={styles.menusTitle}>
            MANAGEMENT
          </Box>
          {menuList.map((menu, index) => {
            return menu.children ? (
              <SubMenuItem
                key={`menu_${index}`}
                icon={menu.icon}
                active={menu.children.filter((child) => child.path === location.pathname)?.length > 0}>
                {menu.children.map((child, idx) => (
                  <MenuItem icon={child.icon} key={idx} path={child.path} active={location.pathname === child.path}>
                    {child.menuName}
                  </MenuItem>
                ))}
              </SubMenuItem>
            ) : (
              <MenuItem
                key={`menu_${index}`}
                icon={menu.icon}
                path={menu.path}
                active={location.pathname === menu.path}>
                {menu.menuName}
              </MenuItem>
            );
          })}
        </Box>
      </SimpleBar>
    </Box>
  );
};

export default Sidebar;
