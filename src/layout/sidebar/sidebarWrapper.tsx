import { Drawer, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, PropsWithChildren, useState } from 'react';

const SidebarWrapper: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setOpen] = useState(true);
  console.log(matches);

  return matches ? (
    <>{children}</>
  ) : (
    <Drawer open={open} onClick={() => setOpen(false)}>
      {children}
    </Drawer>
  );
};

export default SidebarWrapper;
