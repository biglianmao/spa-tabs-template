import React from 'react';
import { Button } from 'antd';
import useHomepageService from './useHomepageService';
import * as Sentry from '@sentry/react';
import type { IRoute} from 'umi';
import { KeepAlive } from 'umi';

function Homepage() {
  const homepageService = useHomepageService();

  return (
    <div>
      <div>我是首页</div>
      <div>当前step: {homepageService.step}</div>
      <Button onClick={() => homepageService.increment()}>增加</Button>
      <Button onClick={() => homepageService.decrement()}>减少</Button>
      <Button
        onClick={() => {
          Sentry.captureException(new Error('sentry error capture'));
        }}
      >
        sentry error2
      </Button>
    </div>
  );
}

export default ({ route }: { route: IRoute }) => (
  <KeepAlive name="/homepage" title={route.title} saveScrollPosition="screen">
    <Homepage />
  </KeepAlive>
);
