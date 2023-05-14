import { West } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import { Box, IconButton, useTheme } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import MenuItem from './menuItem';
import SidebarWrapper from './sidebarWrapper';
import SubMenuItem from './subMenuItem';

import styles from './index.module.scss';

interface MenuType {
  path: string;
  menuName: string;
  icon?: AnyType;
  children?: MenuType[];
}

const Sidebar: FC = (props) => {
  const location = useLocation();
  const { palette } = useTheme();
  const { mode, secondary, cardBg } = palette;

  const menuList: MenuType[] = [
    { path: '/home', menuName: '主页', icon: AdbIcon },
    {
      path: '/',
      menuName: '测试',
      icon: AdbIcon,
      children: [{ path: '/detail', menuName: '详情页面' }]
    }
  ];

  const sidebarContent = (
    <Box className={styles.sidebarWrapper} sx={{ backgroundColor: cardBg.main }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 16px 8px 32px',
          height: '70px'
        }}>
        <Box sx={{ fontWeight: 700, fontSize: '20px', color: mode === 'dark' ? 'white' : 'black' }}>Unitree</Box>
        <IconButton>
          <West sx={{ color: mode === 'dark' ? 'white' : 'rgba(18, 31, 67, 0.54)' }} />
        </IconButton>
      </Box>
      <SimpleBar className={styles.sidebarMenuList}>
        <Box sx={{ paddingLeft: '16px', paddingRight: '16px', height: '100%', color: secondary.main }}>
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

  return <SidebarWrapper>{sidebarContent}</SidebarWrapper>;
};

export default Sidebar;
