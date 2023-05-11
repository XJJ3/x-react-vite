import { Box, ButtonBase } from '@mui/material';
import { Children, FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

interface IProps {
  icon?: AnyType;
  path: string;
  active?: boolean;
}

const MenuItem: FC<PropsWithChildren<IProps>> = (props) => {
  const { icon, children, path, active } = props;
  const Icon = icon;

  const navigate = useNavigate();

  return (
    <Box>
      <ButtonBase className={`${styles.menusItemButton} ${active && styles.active}`} onClick={() => navigate(path)}>
        {icon ? <Icon className={styles.menusItemIcon}></Icon> : <div className={styles.menusItemNoIcon}></div>}

        {children ? (
          Children.map(children, (child) => {
            return (
              <Box component="span" className={styles.menusItemLabel}>
                {child}
              </Box>
            );
          })
        ) : (
          <span className={styles.menusItemLabel}>菜单名称</span>
        )}
      </ButtonBase>
    </Box>
  );
};

export default MenuItem;
