import AdbIcon from '@mui/icons-material/Adb';
import { Box, Button } from '@mui/material';

import styles from './index.module.scss';

const MenuItem = () => {
  return (
    <Box>
      <Button className={styles.menusItemButton}>
        <AdbIcon className={styles.menusItemIcon} />
        <span className={styles.menusItemLabel}>菜单一</span>
      </Button>
    </Box>
  );
};

export default MenuItem;
