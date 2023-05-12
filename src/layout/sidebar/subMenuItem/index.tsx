import { css } from '@emotion/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, ButtonBase, Collapse, useTheme } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

import styles from './index.module.scss';

interface IProps {
  icon?: AnyType;
  label?: string;
  active?: boolean;
}
const SubMenuItem: FC<PropsWithChildren<IProps>> = (props) => {
  const { children, icon, label, active } = props;
  const Icon = icon;

  const [expandState, setExpandState] = useState(false);
  const onExpandChild = () => {
    setExpandState(!expandState);
  };

  const theme = useTheme();

  return (
    <Box>
      <ButtonBase className={`${styles.subMenusItemButton} ${active && styles.active}`} onClick={onExpandChild}>
        <Box sx={{ paddingLeft: '7px', display: 'flex', alignItems: 'center' }}>
          {/* <AdbIcon className={styles.menusItemIcon} /> */}
          {icon ? (
            <Icon className={styles.menusItemIcon}></Icon>
          ) : (
            <div
              css={css`
                width: 4px;
                height: 4px;
                margin-left: 10px;
                margin-right: 8px;
                overflow: hidden;
                border-radius: 50%;
                background: rgb(36, 153, 239);
                box-shadow: rgba(36, 153, 239, 0.2) 0px 0px 0px 3px;
              `}></div>
          )}
          <span className={styles.menusItemLabel}>{label || '菜单名称'}</span>
        </Box>
        <NavigateNextIcon
          className={styles.menuItemArrow}
          sx={{
            transform: `rotate(${expandState ? 90 : 0}deg)`,
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgb(177, 201, 220)'
          }}
        />
      </ButtonBase>
      <Collapse in={expandState} collapsedSize={0}>
        <div>{children}</div>
      </Collapse>
    </Box>
  );
};

export default SubMenuItem;
