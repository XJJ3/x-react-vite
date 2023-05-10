import AdbIcon from '@mui/icons-material/Adb';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button } from '@mui/material';

import ChildMenuItem from './childMenuItem';

import styles from './index.module.scss';

const SubMenuItem = () => {
  return (
    <Box
      sx={{
        '& .expansion-panel': {
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1) 0s'
        }
      }}>
      <Button className={styles.subMenusItemButton}>
        <Box sx={{ paddingLeft: '7px', display: 'flex', alignItems: 'center' }}>
          <AdbIcon className={styles.menusItemIcon} />
          <span className={styles.menusItemLabel}>菜单一</span>
        </Box>
        <NavigateNextIcon className={styles.menuItemArrow} />
      </Button>
      <div className="expansion-panel" style={{ maxHeight: '100px' }}>
        <ChildMenuItem></ChildMenuItem>
      </div>
    </Box>
  );
};

export default SubMenuItem;
