import { Box, styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar';

import styles from './index.module.scss';

// const layoutStyle = {};
const LayoutBoxStyle = styled(Box)(({ theme }) => {
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return {
    paddingLeft: '3rem',
    paddingRight: '3rem',
    transition: 'all 0.3s ease 0s',
    width: `calc(100vw - ${matches ? 280 : 0}px)`,
    marginLeft: `${matches ? 280 : 0}px`,
    minHeight: '100vh'
  };
});

const BasicLayout = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <LayoutBoxStyle>
        <Outlet />
      </LayoutBoxStyle>
    </>
  );
};

export default BasicLayout;
