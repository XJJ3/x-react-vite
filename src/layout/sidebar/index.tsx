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
          <MenuItem icon={AdbIcon} path="/home">
            home
          </MenuItem>
          <SubMenuItem icon={AdbIcon}>
            <MenuItem path="/detail">detail</MenuItem>
          </SubMenuItem>
        </Box>
      </SimpleBar>
    </Box>
  );
};

export default Sidebar;
