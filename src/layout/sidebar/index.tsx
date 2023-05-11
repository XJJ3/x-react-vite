import { West } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import { Box, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import MenuItem from './menuItem';
import SubMenuItem from './subMenuItem';

import styles from './index.module.scss';

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('路由变化了', location.pathname);
  }, [location]);

  const menuList = [
    { path: '/home', menuName: '主页', icon: AdbIcon },
    {
      path: '/',
      menuName: '测试',
      icon: AdbIcon,
      children: [{ path: '/detail', menuName: '详情页面' }]
    }
  ];

  return (
    <Box className={styles.sidebarWrapper}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 16px 8px 32px',
          height: '70px'
        }}>
        <Box sx={{ fontWeight: 700, fontSize: '20px', color: 'white' }}>Unitree</Box>
        <IconButton>
          <West sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <SimpleBar className={styles.sidebarMenuList}>
        <Box sx={{ paddingLeft: '16px', paddingRight: '16px', height: '100%' }}>
          <Box component="p" className={styles.menusTitle}>
            MANAGEMENT
          </Box>
          {menuList.map((menu) => {
            return menu.children ? (
              <SubMenuItem
                icon={menu.icon}
                active={menu.children.filter((child) => child.path === location.pathname)?.length > 0}>
                {menu.children.map((child, index) => (
                  <MenuItem icon={child.icon} key={index} path={child.path} active={location.pathname === child.path}>
                    {child.menuName}
                  </MenuItem>
                ))}
              </SubMenuItem>
            ) : (
              <MenuItem icon={menu.icon} path={menu.path} active={location.pathname === menu.path}>
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
