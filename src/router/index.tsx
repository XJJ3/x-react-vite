import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect, type RouteObject } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import Permission from '@/components/Permission';
import BasicLayout from '@/layout';
import NoFind from '@/pages/NoFind';

const Home = lazy(() => import('@/pages/home'));
const Detail = lazy(() => import('@/pages/detail'));
const Login = lazy(() => import('@/pages/login'));

/**
 * @description 模拟请求用户信息
 * @returns
 */
export const getUserInfo = (): Promise<UserInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jianjian',
        age: 12,
        permissionRoutes: ['home', 'detail'],
        code: 0
      });
    }, 0);
  });
};

/**
 * @param Component 懒加载的组件
 * @param code 用于判断权限的字段(你可以自己定)
 * @returns
 */
const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>, code?: string) => {
  return (
    <Permission code={code}>
      <Suspense fallback={<div>loading...</div>}>
        <Component />
      </Suspense>
    </Permission>
  );
};

/**
 * @description 这个loader函数会在路由渲染前触发,所以可以用来做路由权限控制和登陆重定向
 * @description (取代请求拦截器中的登陆重定向)
 * @description 这个loader函数返回值可以在页面中通过 useRouteLoaderData(id)或者useLoaderData获取
 */
const rootLoader = async () => {
  // console.log('页面加载前请求用户信息');
  // 这里用假的接口模拟下
  const { permissionRoutes, name, age, code } = await getUserInfo();
  // 假设20001代表登陆过期
  if (code === 20001) {
    redirect('/login');
  }
  return {
    name,
    age,
    permissionRoutes
  };
};

const routerConfig: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <Navigate to="/home" />
  // },
  {
    path: '/',
    id: 'root',
    errorElement: <ErrorBoundary />,
    element: <BasicLayout />,
    loader: rootLoader,
    children: [
      {
        path: '/home',
        element: LazyLoad(Home, 'home')
      },
      {
        path: '/detail',
        element: LazyLoad(Detail, 'detail')
      }
    ]
  },
  {
    path: '/login',
    element: LazyLoad(Login)
  },
  {
    path: '*',
    element: <NoFind />
  }
];

export const routes = createBrowserRouter(routerConfig);

export interface UserInfo {
  name: string;
  age: number;
  permissionRoutes: string[];
  code: number;
}
