import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar';

import styles from './index.module.scss';

const BasicLayout = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Box className={styles.basicLayout}>
        <Outlet />
      </Box>
    </>
  );
};

export default BasicLayout;
