import { Box, Button } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Sidebar from '../sidebar';

import styles from './index.module.scss';

// const btnData = [
//   {
//     label: '首页',
//     path: '/home'
//   },
//   {
//     label: '列表',
//     path: '/list'
//   },
//   {
//     label: '详情',
//     path: '/detail'
//   },
//   {
//     label: '登陆',
//     path: '/login'
//   },
//   {
//     label: '404',
//     path: '/404'
//   }
// ];

// const BasicLayout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Box>
//         {btnData.map((item) => (
//           <Button
//             key={item.path}
//             onClick={() => {
//               if (location.pathname === item.path) {
//                 return;
//               }
//               navigate(item.path);
//             }}>
//             {item.label}
//           </Button>
//         ))}
//       </Box>
//       <Outlet />
//     </div>
//   );
// };

const BasicLayout = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Box className={styles.basicLayout}></Box>
    </>
  );
};

export default BasicLayout;
