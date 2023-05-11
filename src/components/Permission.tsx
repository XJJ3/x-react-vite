import { FC, PropsWithChildren } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import type { UserInfo } from '../router';

interface IProps {
  code?: string;
}

const Permission: FC<PropsWithChildren<IProps>> = (props) => {
  // 这个root是我们在前面路由中定义了 id: 'root'
  const loaderData = useRouteLoaderData('root') as UserInfo;
  console.log(loaderData);
  const { children, code } = props;
  if (!code || loaderData?.permissionRoutes?.includes(code)) {
    return <>{children}</>;
  }
  return <div>403...</div>;
};

export default Permission;
